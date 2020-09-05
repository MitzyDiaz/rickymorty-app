const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,n=new RegExp(`${r}|${i}`);class s{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let p=0,c=-1,h=0;const{strings:u,values:{length:_}}=e;for(;h<_;){const e=a.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let i=0;for(let e=0;e<r;e++)o(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=u[h],r=d.exec(t)[2],i=r.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const o=s.split(n);this.parts.push({type:"attribute",index:c,name:r,strings:o}),h+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,s=t.split(n),a=s.length-1;for(let t=0;t<a;t++){let i,n=s[t];if(""===n)i=l();else{const e=d.exec(n);null!==e&&o(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}r.insertBefore(i,e),this.parts.push({type:"node",index:++c})}""===s[a]?(r.insertBefore(l(),e),i.push(e)):e.data=s[a],h+=a}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&c!==p||(c++,t.insertBefore(l(),e)),p=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(i.push(e),c--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const o=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},a=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:r},parts:i}=e,n=document.createTreeWalker(r,133,null,!1);let s=h(i),o=i[s],a=-1,l=0;const d=[];let p=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(d.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==o&&o.index===a;)o.index=null!==p?-1:o.index-l,s=h(i,s),o=i[s]}d.forEach(e=>e.parentNode.removeChild(e))}const c=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},h=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(a(t))return r}return-1};const u=new WeakMap,_=e=>"function"==typeof e&&u.has(e),f={},m={};class y{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,o=0,l=0,d=n.nextNode();for(;o<i.length;)if(s=i[o],a(s)){for(;l<s.index;)l++,"TEMPLATE"===d.nodeName&&(r.push(d),n.currentNode=d.content),null===(d=n.nextNode())&&(n.currentNode=r.pop(),d=n.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const g=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${r} `;class v{constructor(e,t,r,i){this.strings=e,this.values=t,this.type=r,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(n?b:i):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==g&&(t=g.createHTML(t)),e.innerHTML=t,e}}const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=r[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!S(e))return e}let i="";for(let n=0;n<t;n++){i+=e[n];const t=r[n];if(void 0!==t){const e=t.value;if(w(e)||!S(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||w(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===m?(this.value=m,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const r=new y(t,e.processor,this.options),i=r._clone();r.update(e.values),this.__commitNode(i),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,i=0;for(const n of e)r=t[i],void 0===r&&(r=new x(this.options),t.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(t[i-1])),r.setValue(n),r.commit(),i++;i<t.length&&(t.length=i,this.clear(r&&r.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class O extends P{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let T=!1;(()=>{try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class N{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function I(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(r);return i=t.keyString.get(n),void 0===i&&(i=new s(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const M=new Map,D=new WeakMap;const R=new class{handleAttributeExpressions(e,t,r,i){const n=t[0];if("."===n){return new O(e,t.slice(1),r).parts}if("@"===n)return[new N(e,t.slice(1),i.eventContext)];if("?"===n)return[new E(e,t.slice(1),r)];return new P(e,t,r).parts}handleTextExpression(e){return new x(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(e,...t)=>new v(e,t,"html",R),F=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const z=e=>t=>{const i=F(t.type,e);let n=M.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},M.set(i,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(r);if(o=n.keyString.get(a),void 0===o){const r=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(r,e),o=new s(t,r),n.keyString.set(a,o)}return n.stringsArray.set(t.strings,o),o},$=["html","svg"],j=new Set,U=(e,t,r)=>{j.add(e);const i=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{$.forEach(t=>{const r=M.get(F(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),p(e,r)})})})(e);const a=i.content;r?function(e,t,r=null){const{element:{content:i},parts:n}=e;if(null==r)return void i.appendChild(t);const s=document.createTreeWalker(i,133,null,!1);let o=h(n),a=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===r&&(a=c(t),r.parentNode.insertBefore(t,r));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=h(n,o);return}o=h(n,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},V=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:V};class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const i=this._attributeNameForProperty(r,t);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdateInternal(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=V){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,i=t.converter||B,n="function"==typeof i?i:i.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,i=t.converter;return(i&&i.toAttribute||B.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=q){const i=this.constructor,n=i._attributeNameForProperty(e,r);if(void 0!==n){const e=i._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(e);if(void 0!==i){const e=r.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let i=!0;if(void 0!==e){const n=this.constructor;r=r||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y.finalized=!0;const J=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class X{constructor(e,t){if(t!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(e,...t)=>{const r=t.reduce((t,r,i)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1],e[0]);return new X(r,W)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class K extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),i=[];r.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!J){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new X(String(t),W)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Z}}K.finalized=!0,K.render=(e,r,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=D.has(r),o=H&&11===r.nodeType&&!!r.host,a=o&&!j.has(n),l=a?document.createDocumentFragment():r;if(((e,r,i)=>{let n=D.get(r);void 0===n&&(t(r,r.firstChild),D.set(r,n=new x(Object.assign({templateFactory:I},i))),n.appendInto(r)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:z(n)},i)),a){const e=D.get(l);D.delete(l);const i=e.value instanceof y?e.value.template:void 0;U(n,l,i),t(r,r.firstChild),r.appendChild(l),D.set(r,e)}!s&&o&&window.ShadyCSS.styleElement(r.host)};let Q,ee,te=e=>e;window.customElements.define("rickmorty-api",class extends K{static get styles(){return G(Q||(Q=te`:host{color:red}`))}static get properties(){return{characters:{type:Array}}}constructor(){super(),this.characters=[]}async firstUpdated(){await fetch("https://rickandmortyapi.com/api/character/").then(e=>e.json()).then(e=>{this.createCharacters(e.results)}),this.dispatchEvent(new CustomEvent("cargar",{detail:this.characters}))}createCharacters(e){e.forEach((e,t)=>{let r={name:e.name,id:e.id,image:e.image};this.characters=[...this.characters,r]})}render(){return L(ee||(ee=te``))}});const re=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ie,ne;function se(e){ie=(!e||!e.shimcssproperties)&&(re||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ne=window.ShadyCSS.cssBuild);const oe=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ie=window.ShadyCSS.nativeCss:window.ShadyCSS?(se(window.ShadyCSS),window.ShadyCSS=void 0):se(window.WebComponents&&window.WebComponents.flags);const ae=ie;class le{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function de(e){return function e(t,r){let i=r.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;i=r.substring(e,t.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(_e.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=t.parsedSelector=t.selector=i.trim();t.atRule=0===n.indexOf(ye),t.atRule?0===n.indexOf(me)?t.type=ce.MEDIA_RULE:n.match(_e.keyframesRule)&&(t.type=ce.KEYFRAMES_RULE,t.keyframesName=t.selector.split(_e.multipleSpaces).pop()):0===n.indexOf(fe)?t.type=ce.MIXIN_RULE:t.type=ce.STYLE_RULE}let n=t.rules;if(n)for(let t,i=0,s=n.length;i<s&&(t=n[i]);i++)e(t,r);return t}(function(e){let t=new le;t.start=0,t.end=e.length;let r=t;for(let i=0,n=e.length;i<n;i++)if(e[i]===he){r.rules||(r.rules=[]);let e=r,t=e.rules[e.rules.length-1]||null;r=new le,r.start=i+1,r.parent=e,r.previous=t,e.rules.push(r)}else e[i]===ue&&(r.end=i+1,r=r.parent||t);return t}(e=e.replace(_e.comments,"").replace(_e.port,"")),e)}function pe(e,t,r=""){let i="";if(e.cssText||e.rules){let r=e.rules;if(r&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(fe)}(r))for(let e,n=0,s=r.length;n<s&&(e=r[n]);n++)i=pe(e,t,i);else i=t?e.cssText:function(e){return function(e){return e.replace(_e.mixinApply,"").replace(_e.varApply,"")}(e=function(e){return e.replace(_e.customProp,"").replace(_e.mixinProp,"")}(e))}(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(r+=e.selector+" "+he+"\n"),r+=i,e.selector&&(r+=ue+"\n\n")),r}const ce={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},he="{",ue="}",_e={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},fe="--",me="@media",ye="@",ge=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,be=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ve=/@media\s(.*)/,we=new Set;function Se(e){const t=e.textContent;if(!we.has(t)){we.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Pe(e){return e.hasAttribute("shady-unscoped")}function Ce(e,t){return e?("string"==typeof e&&(e=de(e)),t&&Ee(e,t),pe(e,ae)):""}function xe(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=de(e.textContent)),e.__cssRules||null}function Ee(e,t,r,i){if(!e)return;let n=!1,s=e.type;if(i&&s===ce.MEDIA_RULE){let t=e.selector.match(ve);t&&(window.matchMedia(t[1]).matches||(n=!0))}s===ce.STYLE_RULE?t(e):r&&s===ce.KEYFRAMES_RULE?r(e):s===ce.MIXIN_RULE&&(n=!0);let o=e.rules;if(o&&!n)for(let e,n=0,s=o.length;n<s&&(e=o[n]);n++)Ee(e,t,r,i)}window.ShadyDOM&&window.ShadyDOM.wrap;function Oe(e){if(void 0!==ne)return ne;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function Ae(e){return""!==Oe(e)}function Te(e,t){for(let r in t)null===r?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function Ne(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}const ke=/;\s*/m,Ie=/^\s*(initial)|(inherit)\s*$/,Me=/\s*!important/;class De{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Re=null;class Le{constructor(){this._currentElement=null,this._measureElement=null,this._map=new De}detectMixin(e){return function(e){const t=be.test(e)||ge.test(e);return be.lastIndex=0,ge.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],r=e.querySelectorAll("style");for(let e=0;e<r.length;e++){const i=r[e];Pe(i)?re||(Se(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}(e.content);if(t){const r=document.createElement("style");return r.textContent=t,e.content.insertBefore(r,e.content.firstChild),r}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const r=e._gatheredStyle;return r?this.transformStyle(r,t):null}transformStyle(e,t=""){let r=xe(e);return this.transformRules(r,t),e.textContent=Ce(r),r}transformCustomStyle(e){let t=xe(e);return Ee(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Ce(t),t}transformRules(e,t){this._currentElement=t,Ee(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(ge,(e,r,i,n)=>this._produceCssProperties(e,r,i,n,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const r={};let i=!1;return Ee(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(r,this._cssTextToMap(t.parsedCssText))}),r}_consumeCssProperties(e,t){let r=null;for(;r=be.exec(e);){let i=r[0],n=r[1],s=r.index,o=s+i.indexOf("@apply"),a=s+i.length,l=e.slice(0,o),d=e.slice(a),p=t?this._fallbacksFromPreviousRules(t):{};Object.assign(p,this._cssTextToMap(l));let c=this._atApplyToCssProperties(n,p);e=`${l}${c}${d}`,be.lastIndex=s+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(ke,"");let r=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let n,s,o;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(n in a)o=t&&t[n],s=[n,": var(",e,"_-_",n],o&&s.push(",",o.replace(Me,"")),s.push(")"),Me.test(a[n])&&s.push(" !important"),r.push(s.join(""))}return r.join("; ")}_replaceInitialOrInherit(e,t){let r=Ie.exec(t);return r&&(t=r[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let r,i,n=e.split(";"),s={};for(let e,o,a=0;a<n.length;a++)e=n[a],e&&(o=e.split(":"),o.length>1&&(r=o[0].trim(),i=o.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(r,i)),s[r]=i));return s}_invalidateMixinEntry(e){if(Re)for(let t in e.dependants)t!==this._currentElement&&Re(t)}_produceCssProperties(e,t,r,i,n){if(r&&function e(t,r){let i=t.indexOf("var(");if(-1===i)return r(t,"","","");let n=function(e,t){let r=0;for(let i=t,n=e.length;i<n;i++)if("("===e[i])r++;else if(")"===e[i]&&0==--r)return i;return-1}(t,i+3),s=t.substring(i+4,n),o=t.substring(0,i),a=e(t.substring(n+1),r),l=s.indexOf(",");return-1===l?r(o,s.trim(),"",a):r(o,s.substring(0,l).trim(),s.substring(l+1).trim(),a)}(r,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let s=this._consumeCssProperties(""+i,n),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,d=this._map.get(t),p=d&&d.properties;p?l=Object.assign(Object.create(p),a):this._map.set(t,l);let c,h,u=[],_=!1;for(c in l)h=a[c],void 0===h&&(h="initial"),p&&!(c in p)&&(_=!0),u.push(`${t}_-_${c}: ${h}`);return _&&this._invalidateMixinEntry(d),d&&(d.properties=l),r&&(o=`${e};${o}`),`${o}${u.join("; ")};`}}Le.prototype.detectMixin=Le.prototype.detectMixin,Le.prototype.transformStyle=Le.prototype.transformStyle,Le.prototype.transformCustomStyle=Le.prototype.transformCustomStyle,Le.prototype.transformRules=Le.prototype.transformRules,Le.prototype.transformRule=Le.prototype.transformRule,Le.prototype.transformTemplate=Le.prototype.transformTemplate,Le.prototype._separator="_-_",Object.defineProperty(Le.prototype,"invalidCallback",{get:()=>Re,set(e){Re=e}});const Fe={},He="_applyShimCurrentVersion",ze="_applyShimNextVersion",$e=Promise.resolve();function je(e){let t=Fe[e];t&&function(e){e[He]=e[He]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[ze]=(e[ze]||0)+1}(t)}function Ue(e){return e[He]===e[ze]}let Be,Ve=null,qe=window.HTMLImports&&window.HTMLImports.whenReady||null;function Ye(e){requestAnimationFrame((function(){qe?qe(e):(Ve||(Ve=new Promise(e=>{Be=e}),"complete"===document.readyState?Be():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Be()})),Ve.then((function(){e&&e()})))}))}const Je="__shadyCSSCachedStyle";let We=null,Xe=null;class Ge{constructor(){this.customStyles=[],this.enqueued=!1,Ye(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Xe&&(this.enqueued=!0,Ye(Xe))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Je])return e[Je];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const r=e[t];if(r[Je])continue;const i=this.getStyleForCustomStyle(r);if(i){const e=i.__appliedElement||i;We&&We(e),r[Je]=e}}return e}}Ge.prototype.addCustomStyle=Ge.prototype.addCustomStyle,Ge.prototype.getStyleForCustomStyle=Ge.prototype.getStyleForCustomStyle,Ge.prototype.processStyles=Ge.prototype.processStyles,Object.defineProperties(Ge.prototype,{transformCallback:{get:()=>We,set(e){We=e}},validateCallback:{get:()=>Xe,set(e){let t=!1;Xe||(t=!0),Xe=e,t&&this.enqueueDocumentValidation()}}});const Ze=new Le;class Ke{constructor(){this.customStyleInterface=null,Ze.invalidCallback=je}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Ze.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Ae(e))return;Fe[t]=e;let r=Ze.transformTemplate(e,t);e._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let r=e[t],i=this.customStyleInterface.getStyleForCustomStyle(r);i&&Ze.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Te(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,r="",i="";return t?t.indexOf("-")>-1?r=t:(i=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,i=e.extends),{is:r,typeExtension:i}}(e),r=Fe[t];if((!r||!Ae(r))&&r&&!Ue(r)){(function(e){return!Ue(e)&&e._applyShimValidatingVersion===e[ze]})(r)||(this.prepareTemplate(r,t),function(e){e._applyShimValidatingVersion=e[ze],e._validating||(e._validating=!0,$e.then((function(){e[He]=e[ze],e._validating=!1})))}(r));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=r._styleAst,e.textContent=Ce(r._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Ke;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,r,i){e.flushCustomStyles(),e.prepareTemplate(t,r)},prepareTemplateStyles(e,t,r){window.ShadyCSS.prepareTemplate(e,t,r)},prepareTemplateDom(e,t){},styleSubtree(t,r){e.flushCustomStyles(),e.styleSubtree(t,r)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Ne(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:ae,nativeShadow:re,cssBuild:ne,disableRuntime:oe},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Ze,window.JSCompiler_renameProperty=function(e,t){return e};let Qe,et,tt=/(url\()([^)]*)(\))/g,rt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function it(e,t){if(e&&rt.test(e))return e;if("//"===e)return e;if(void 0===Qe){Qe=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Qe="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),Qe)try{return new URL(e,t).href}catch(t){return e}return et||(et=document.implementation.createHTMLDocument("temp"),et.base=et.createElement("base"),et.head.appendChild(et.base),et.anchor=et.createElement("a"),et.body.appendChild(et.anchor)),et.base.href=t,et.anchor.href=e,et.anchor.href||e}function nt(e,t){return e.replace(tt,(function(e,r,i,n){return r+"'"+it(i.replace(/["']/g,""),t)+"'"+n}))}function st(e){return e.substring(0,e.lastIndexOf("/")+1)}const ot=!window.ShadyDOM||!window.ShadyDOM.inUse,at=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),ot&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let lt=window.Polymer&&window.Polymer.rootPath||st(document.baseURI||window.location.href),dt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,pt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,ct=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ht=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ut=window.Polymer&&window.Polymer.legacyOptimizations||!1,_t=window.Polymer&&window.Polymer.legacyWarnings||!1,ft=window.Polymer&&window.Polymer.syncInitialRender||!1,mt=window.Polymer&&window.Polymer.legacyUndefined||!1,yt=window.Polymer&&window.Polymer.orderedComputed||!1,gt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,bt=window.Polymer&&window.Polymer.fastDomIf||!1,vt=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,wt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,St=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Pt=0;const Ct=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=Pt++;return function(i){let n=i.__mixinSet;if(n&&n[r])return i;let s=t,o=s.get(i);if(!o){o=e(i),s.set(i,o);let t=Object.create(o.__mixinSet||n||null);t[r]=!0,o.__mixinSet=t}return o}};let xt={},Et={};function Ot(e,t){xt[e]=Et[e.toLowerCase()]=t}function At(e){return xt[e]||Et[e.toLowerCase()]}class Tt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let r=At(e);return r&&t?r.querySelector(t):r}return null}attributeChangedCallback(e,t,r,i){t!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=it(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=st(t)}return this.__assetpath}register(e){if(e=e||this.id){if(ct&&void 0!==At(e))throw Ot(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ot(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Tt.prototype.modules=xt,customElements.define("dom-module",Tt);function Nt(e){return Tt.import(e)}function kt(e){const t=nt((e.body?e.body:e).textContent,e.baseURI),r=document.createElement("style");return r.textContent=t,r}function It(e){const t=e.trim().split(/\s+/),r=[];for(let e=0;e<t.length;e++)r.push(...Mt(t[e]));return r}function Mt(e){const t=Nt(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...Rt(t));const r=t.querySelector("template");r&&e.push(...Dt(r,t.assetpath)),t._styles=e}return t._styles}function Dt(e,t){if(!e._styles){const r=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let n=i[e],s=n.getAttribute("include");s&&r.push(...It(s).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(n.textContent=nt(n.textContent,t)),r.push(n)}e._styles=r}return e._styles}function Rt(e){const t=[],r=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<r.length;e++){let i=r[e];if(i.import){const e=i.import,r=i.hasAttribute("shady-unscoped");if(r&&!e._unscopedStyle){const t=kt(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=kt(e));t.push(r?e._unscopedStyle:e._style)}}return t}function Lt(e){let t=Nt(e);if(t&&void 0===t._cssText){let e=function(e){let t="",r=Rt(e);for(let e=0;e<r.length;e++)t+=r[e].textContent;return t}(t),r=t.querySelector("template");r&&(e+=function(e,t){let r="";const i=Dt(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),r+=t.textContent}return r}(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const Ft=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Ht(e){return e.indexOf(".")>=0}function zt(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function $t(e,t){return 0===e.indexOf(t+".")}function jt(e,t){return 0===t.indexOf(e+".")}function Ut(e,t,r){return t+r.slice(e.length)}function Bt(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let i=e[r].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function Vt(e){return Array.isArray(e)?Bt(e).split("."):e.toString().split(".")}function qt(e,t,r){let i=e,n=Vt(t);for(let e=0;e<n.length;e++){if(!i)return;i=i[n[e]]}return r&&(r.path=n.join(".")),i}function Yt(e,t,r){let i=e,n=Vt(t),s=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(i=i[n[e]],!i)return}i[s]=r}else i[t]=r;return n.join(".")}const Jt={},Wt=/-[a-z]/g,Xt=/([A-Z])/g;function Gt(e){return Jt[e]||(Jt[e]=e.indexOf("-")<0?e:e.replace(Wt,e=>e[1].toUpperCase()))}function Zt(e){return Jt[e]||(Jt[e]=e.replace(Xt,"-$1").toLowerCase())}let Kt=0,Qt=0,er=[],tr=0,rr=!1,ir=document.createTextNode("");new window.MutationObserver((function(){rr=!1;const e=er.length;for(let t=0;t<e;t++){let e=er[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}er.splice(0,e),Qt+=e})).observe(ir,{characterData:!0});const nr={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},sr={run:e=>(rr||(rr=!0,ir.textContent=tr++),er.push(e),Kt++),cancel(e){const t=e-Qt;if(t>=0){if(!er[t])throw new Error("invalid async handle: "+e);er[t]=null}}},or=sr,ar=Ct(e=>class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let i=this.__data[e],n=this._shouldPropertyChange(e,t,i);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,or.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r)),this.__dataCounter--}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r==r||t==t)}attributeChangedCallback(e,t,r,i){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,i)}_attributeToProperty(e,t,r){if(!this.__serializing){const i=this.__dataAttributes,n=i&&i[e]||e;this[n]=this._deserializeValue(t,r||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const i=this._serializeValue(t);"class"!==r&&"name"!==r&&"slot"!==r||(e=Ft(e)),void 0===i?e.removeAttribute(r):e.setAttribute(r,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),lr={};let dr=HTMLElement.prototype;for(;dr;){let e=Object.getOwnPropertyNames(dr);for(let t=0;t<e.length;t++)lr[e[t]]=!0;dr=Object.getPrototypeOf(dr)}const pr=Ct(e=>{const t=ar(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Gt(e[t]))}static attributeNameForProperty(e){return Zt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(t){r=e}break;case Array:try{r=JSON.parse(e)}catch(t){r=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!lr[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),cr={"dom-if":!0,"dom-repeat":!0};let hr=!1,ur=!1;function _r(e){(function(){if(!hr){hr=!0;const e=document.createElement("textarea");e.placeholder="a",ur=e.placeholder===e.textContent}return ur})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function fr(e){let t=e.getAttribute("is");if(t&&cr[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;)e.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return e}function mr(e,t){let r=t.parentInfo&&mr(e,t.parentInfo);if(!r)return e;for(let e=r.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function yr(e,t,r,i){i.id&&(t[i.id]=r)}function gr(e,t,r){if(r.events&&r.events.length)for(let i,n=0,s=r.events;n<s.length&&(i=s[n]);n++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function br(e,t,r,i){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=i)}const vr=Ct(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(t),r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let i=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(n,t,r)||i,_r(n),n.firstChild&&this._parseTemplateChildNodes(n,t,r),n.hasAttributes&&n.hasAttributes()&&(i=this._parseTemplateNodeAttributes(n,t,r)||i),i||r.noted}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let i,n=e.firstChild,s=0;n;n=i){if("template"==n.localName&&(n=fr(n)),i=n.nextSibling,n.nodeType===Node.TEXT_NODE){let r=i;for(;r&&r.nodeType===Node.TEXT_NODE;)n.textContent+=r.textContent,i=r.nextSibling,e.removeChild(r),r=i;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let o={parentIndex:s,parentInfo:r};this._parseTemplateNode(n,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),n.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,r){let i=e,n=this._parseTemplate(i,t);return(n.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),r.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,r){let i=!1,n=Array.from(e.attributes);for(let s,o=n.length-1;s=n[o];o--)i=this._parseTemplateNodeAttribute(e,t,r,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(e,t,r,i,n){return"on-"===i.slice(0,3)?(e.removeAttribute(i),r.events=r.events||[],r.events.push({name:i.slice(3),value:n}),!0):"id"===i&&(r.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let r=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,i=t.content||e.content,n=document.importNode(i,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let s=n.nodeList=new Array(r.length);n.$={};for(let e,i=0,o=r.length;i<o&&(e=r[i]);i++){let r=s[i]=mr(n,e);yr(0,n.$,r,e),br(0,r,e,t),gr(this,r,e)}return n=n,n}_addMethodEventListenerToNode(e,t,r,i){let n=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(i=i||e,0,r);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}});let wr=0;const Sr=[],Pr={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Cr=/[A-Z]/;function xr(e,t,r){let i=e[t];if(i){if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),r))for(let e in i){let t=i[e],r=i[e]=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}}else i=e[t]={};return i}function Er(e,t,r,i,n,s){if(t){let o=!1;const a=wr++;for(let l in r){let d=t[n?zt(l):l];if(d)for(let t,p=0,c=d.length;p<c&&(t=d[p]);p++)t.info&&t.info.lastRun===a||n&&!Ar(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,r,i,t.info,n,s),o=!0)}return o}return!1}function Or(e,t,r,i,n,s,o,a){let l=!1,d=t[o?zt(i):i];if(d)for(let t,p=0,c=d.length;p<c&&(t=d[p]);p++)t.info&&t.info.lastRun===r||o&&!Ar(i,t.trigger)||(t.info&&(t.info.lastRun=r),t.fn(e,i,n,s,t.info,o,a),l=!0);return l}function Ar(e,t){if(t){let r=t.name;return r==e||!(!t.structured||!$t(r,e))||!(!t.wildcard||!jt(r,e))}return!0}function Tr(e,t,r,i,n){let s="string"==typeof n.method?e[n.method]:n.method,o=n.property;s?s.call(e,e.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Nr(e,t,r){let i=zt(t);if(i!==t){return kr(e,Zt(i)+"-changed",r[t],t),!0}return!1}function kr(e,t,r,i){let n={value:r,queueProperty:!0};i&&(n.path=i),Ft(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function Ir(e,t,r,i,n,s){let o=(s?zt(t):t)!=t?t:null,a=o?qt(e,o):e.__data[t];o&&void 0===a&&(a=r[t]),kr(e,n.eventName,a,o)}function Mr(e,t,r,i,n){let s=e.__data[t];dt&&(s=dt(s,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,s)}function Dr(e,t,r,i){let n=e[Pr.COMPUTE];if(n)if(yt){wr++;const s=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[Pr.COMPUTE];let i,{counts:n,ready:s,total:o}=function(e){const t=e.__computeInfo,r={},i=e[Pr.COMPUTE],n=[];let s=0;for(let e in t){const i=t[e];s+=r[e]=i.args.filter(e=>!e.literal).length+(i.dynamicFn?1:0)}for(let e in i)t[e]||n.push(e);return{counts:r,ready:n,total:s}}(e);for(;i=s.shift();){t.set(i,t.size);const e=r[i];e&&e.forEach(e=>{const t=e.info.methodInfo;--o,0==--n[t]&&s.push(t)})}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)Lr(e,n,o,s,i);let a;for(;a=o.shift();)Fr(e,"",t,r,a)&&Lr(a.methodInfo,n,o,s,i);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;Er(e,n,s,r,i);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const Rr=(e,t,r)=>{let i=0,n=t.length-1,s=-1;for(;i<=n;){const o=i+n>>1,a=r.get(t[o].methodInfo)-r.get(e.methodInfo);if(a<0)i=o+1;else{if(!(a>0)){s=o;break}n=o-1}}s<0&&(s=n+1),t.splice(s,0,e)},Lr=(e,t,r,i,n)=>{const s=t[n?zt(e):e];if(s)for(let t=0;t<s.length;t++){const o=s[t];o.info.lastRun===wr||n&&!Ar(e,o.trigger)||(o.info.lastRun=wr,Rr(o.info,r,i))}};function Fr(e,t,r,i,n){let s=Vr(e,t,r,i,n);if(s===Sr)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function Hr(e,t,r,i,n,s,o){r.bindings=r.bindings||[];let a={kind:i,target:n,parts:s,literal:o,isCompound:1!==s.length};if(r.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Zt(n)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let i=a.parts[r];i.compoundIndex=r,zr(e,t,a,i,l)}}function zr(e,t,r,i,n){if(!i.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,o={index:n,binding:r,part:i,evaluator:e};for(let r=0;r<s.length;r++){let i=s[r];"string"==typeof i&&(i=Xr(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:$r,info:o,trigger:i})}}}function $r(e,t,r,i,n,s,o){let a=o[n.index],l=n.binding,d=n.part;if(s&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=r[t];t=Ut(d.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{let o=n.evaluator._evaluateBinding(e,d,t,r,i,s);o!==Sr&&function(e,t,r,i,n){n=function(e,t,r,i){if(r.isCompound){let n=e.__dataCompoundStorage[r.target];n[i.compoundIndex]=t,t=n.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,r,i),dt&&(n=dt(n,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,n,r.target);else{let i=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[Pr.READ_ONLY]&&t[Pr.READ_ONLY][i]||t._setPendingProperty(i,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,n)}}(e,a,l,d,o)}}function jr(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,n=new Array(i.length);for(let e=0;e<i.length;e++)n[e]=i[e].literal;let s=t.target;r[s]=n,t.literal&&"property"==t.kind&&("className"===s&&(e=Ft(e)),e[s]=t.literal)}}function Ur(e,t,r){if(r.listenerEvent){let i=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,i,n){let s,o=e.detail,a=o&&o.path;a?(i=Ut(r,i,a),s=o&&o.value):s=e.currentTarget[r],s=n?!s:s,t[Pr.READ_ONLY]&&t[Pr.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,r.target,i.source,i.negate)}))}}function Br(e,t,r,i,n,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:s};for(let n,s=0;s<t.args.length&&(n=t.args[s]);s++)n.literal||e._addPropertyEffect(n.rootProperty,r,{fn:i,info:o,trigger:n});return s&&e._addPropertyEffect(t.methodName,r,{fn:i,info:o}),o}function Vr(e,t,r,i,n){let s=e._methodHost||e,o=s[n.methodName];if(o){let i=e._marshalArgs(n.args,t,r);return i===Sr?Sr:o.apply(s,i)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const qr=[],Yr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Jr(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function Wr(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:qr};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=Xr(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Xr(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=zt(t),r.structured=Ht(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function Gr(e,t,r){let i=qt(e,r);return void 0===i&&(i=t[r]),i}function Zr(e,t,r,i){const n={indexSplices:i};mt&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(r+".splices",n),e.notifyPath(r+".length",t.length),mt&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function Kr(e,t,r,i,n,s){Zr(e,t,r,[{index:i,addedCount:n,removed:s,object:t,type:"splice"}])}const Qr=Ct(e=>{const t=vr(pr(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Pr}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ei.length){let e=ei[ei.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Pr.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==Pr.READ_ONLY);let i=xr(this,t,!0)[e];i||(i=this[t][e]=[]),i.push(r)}_removePropertyEffect(e,t,r){let i=xr(this,t,!0)[e],n=i.indexOf(r);n>=0&&i.splice(n,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Pr.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Pr.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Pr.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Pr.COMPUTE)}_setPendingPropertyOrPath(e,t,r,i){if(i||zt(Array.isArray(e)?e[0]:e)!==e){if(!i){let r=qt(this,e);if(!(e=Yt(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let i=e.__dataLinkedPaths;if(i){let n;for(let s in i){let o=i[s];jt(s,t)?(n=Ut(s,o,t),e._setPendingPropertyOrPath(n,r,!0,!0)):jt(o,t)&&(n=Ut(o,s,t),e._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||("className"===t&&(e=Ft(e)),e[t]=r)}_setPendingProperty(e,t,r){let i=this.__dataHasPaths&&Ht(e),n=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[Pr.NOTIFY]&&this[Pr.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[Pr.READ_ONLY]&&this[Pr.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let i,n=this.__dataHasPaths;this.__dataHasPaths=!1,Dr(this,t,r,n),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,r,n),this._flushClients(),Er(this,this[Pr.REFLECT],t,r,n),Er(this,this[Pr.OBSERVE],t,r,n),i&&function(e,t,r,i,n){let s,o,a=e[Pr.NOTIFY],l=wr++;for(let o in t)t[o]&&(a&&Or(e,a,l,o,r,i,n)||n&&Nr(e,o,r))&&(s=!0);s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,t,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[Pr.PROPAGATE]&&Er(this,this[Pr.PROPAGATE],e,t,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,r)}_runEffectsForTemplate(e,t,r,i){const n=(t,i)=>{Er(this,e.propertyEffects,t,r,i,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,r,i)};e.runEffects?e.runEffects(n,t,i):n(t,i)}linkPaths(e,t){e=Bt(e),t=Bt(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Bt(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};Zr(this,qt(this,e,r),r.path,t)}get(e,t){return qt(t||this,e)}set(e,t,r){r?Yt(r,e,t):this[Pr.READ_ONLY]&&this[Pr.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let r={path:""},i=qt(this,e,r),n=i.length,s=i.push(...t);return t.length&&Kr(this,i,r.path,n,t.length,[]),s}pop(e){let t={path:""},r=qt(this,e,t),i=Boolean(r.length),n=r.pop();return i&&Kr(this,r,t.path,r.length,0,[n]),n}splice(e,t,r,...i){let n,s={path:""},o=qt(this,e,s);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?o.splice(t):o.splice(t,r,...i),(i.length||n.length)&&Kr(this,o,s.path,t,i.length,n),n}shift(e){let t={path:""},r=qt(this,e,t),i=Boolean(r.length),n=r.shift();return i&&Kr(this,r,t.path,0,0,[n]),n}unshift(e,...t){let r={path:""},i=qt(this,e,r),n=i.unshift(...t);return t.length&&Kr(this,i,r.path,0,t.length,[]),n}notifyPath(e,t){let r;if(1==arguments.length){let i={path:""};t=qt(this,e,i),r=i.path}else r=Array.isArray(e)?Bt(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,Pr.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let i={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,Pr.OBSERVE,{fn:Tr,info:i,trigger:{name:e}}),r&&this._addPropertyEffect(t,Pr.OBSERVE,{fn:Tr,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let r=Wr(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");Br(this,r,Pr.OBSERVE,Vr,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Pr.NOTIFY,{fn:Ir,info:{eventName:Zt(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Pr.REFLECT,{fn:Mr,info:{attrName:t}})}_createComputedProperty(e,t,r){let i=Wr(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");const n=Br(this,i,Pr.COMPUTE,Fr,e,r);xr(this,"__computeInfo")[e]=n}_marshalArgs(e,t,r){const i=this.__data,n=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:d,literal:p}=e[s];if(!p)if(l){const e=jt(o,t),n=Gr(i,r,e?t:o);d={path:e?t:o,value:n,base:e?qt(i,o):n}}else d=a?Gr(i,r,o):i[o];if(mt&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return Sr;n[s]=d}return n}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),i=this.__preBoundTemplateInfo==r;if(!i)for(let e in r.propertyEffects)this._createPropertyAccessor(e);if(t)if(r=Object.create(r),r.wasPreBound=i,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,i=t.lastChild;r.parent=t,t.lastChild=r,r.previousSibling=i,i?i.nextSibling=r:t.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(r)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),ei.push(this);let r=super._stampTemplate(e,t);if(ei.pop(),t.nodeList=r.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=r.firstChild;t;t=t.nextSibling)e.push(t)}return r.templateInfo=t,function(e,t){let{nodeList:r,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let n=i[t],s=r[t],o=n.bindings;if(o)for(let t=0;t<o.length;t++){let r=o[t];jr(s,r),Ur(s,e,r)}s.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:r,nextSibling:i,parent:n}=t;r?r.nextSibling=i:n&&(n.firstChild=i),i?i.previousSibling=r:n&&(n.lastChild=r),t.nextSibling=t.previousSibling=null;let s=t.childNodes;for(let e=0;e<s.length;e++){let t=s[e];Ft(Ft(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,r,i){let n=t._parseTemplateNode.call(this,e,r,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,r);t&&(e.textContent=Jr(t)||" ",Hr(this,r,i,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,r,i,n,s){let o=this._parseBindings(s,r);if(o){let t=n,s="property";Cr.test(n)?s="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),s="attribute");let a=Jr(o);return a&&"attribute"==s&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"attribute"==s&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(n=Gt(n)),Hr(this,r,i,s,n,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,r,i,n,s)}static _parseTemplateNestedTemplate(e,r,i){let n=t._parseTemplateNestedTemplate.call(this,e,r,i);const s=e.parentNode,o=i.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;gt&&(a||l)&&(s.removeChild(e),(i=i.parentInfo).templateInfo=o,i.noted=!0,n=!1);let d=o.hostProps;if(bt&&a)d&&(r.hostProps=Object.assign(r.hostProps||{},d),gt||(i.parentInfo.noted=!0));else{let e="{";for(let t in d){Hr(this,r,i,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return n}static _parseBindings(e,t){let r,i=[],n=0;for(;null!==(r=Yr.exec(e));){r.index>n&&i.push({literal:e.slice(n,r.index)});let s=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,d="",p=-1;"{"==s&&(p=a.indexOf("::"))>0&&(d=a.substring(p+2),a=a.substring(0,p),l=!0);let c=Wr(a),h=[];if(c){let{args:e,methodName:r}=c;for(let t=0;t<e.length;t++){let r=e[t];r.literal||h.push(r)}let i=t.dynamicFns;(i&&i[r]||c.static)&&(h.push(r),c.dynamicFn=!0)}else h.push(a);i.push({source:a,mode:s,negate:o,customEvent:l,signature:c,dependencies:h,event:d}),n=Yr.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,r,i,n,s){let o;return o=t.signature?Vr(e,r,i,0,t.signature):r!=t.source?qt(e,t.source):s&&Ht(r)?qt(e,r):e.__data[r],t.negate&&(o=!o),o}}}),ei=[];const ti=Ct(e=>{const t=ar(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=function(e){const t={};for(let r in e){const i=e[r];t[r]="function"==typeof i?{type:i}:i}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),ri=window.ShadyCSS&&window.ShadyCSS.cssBuild,ii=Ct(e=>{const t=ti(Qr(e));function r(e,t,r,i){r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,r.computed,i)),r.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===r.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),r.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===r.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),r.observer&&e._createPropertyObserver(t,r.observer,i[r.observer]),e._addPropertyToAttributeMap(t)}function i(e,t,r,i){if(!ri){const n=t.content.querySelectorAll("style"),s=Dt(t),o=function(e){let t=Nt(e);return t?Rt(t):[]}(r),a=t.content.firstElementChild;for(let r=0;r<o.length;r++){let n=o[r];n.textContent=e._processStyleText(n.textContent,i),t.content.insertBefore(n,a)}let l=0;for(let t=0;t<s.length;t++){let r=s[t],o=n[l];o!==r?(r=r.cloneNode(!0),o.parentNode.insertBefore(r,o)):l++,r.textContent=e._processStyleText(r.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r),St&&ri&&at){const r=t.content.querySelectorAll("style");if(r){let t="";Array.from(r).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):ut||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)r(this.prototype,t,e[t],e)}static createObservers(e,t){const r=this.prototype;for(let i=0;i<e.length;i++)r._createMethodObserver(e[i],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!ct||ht)&&(t=Tt.import(e,"template"),ct&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=st(e.url);else{const e=Tt.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=lt,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let i=t[r];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return nt(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;i(this,t,e,r?it(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Ft(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ft&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=it(this.importPath)),it(e,t)}static _parseTemplateContent(e,r,i){return r.dynamicFns=r.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,r,i)}static _addTemplatePropertyEffect(e,r,i){return!_t||r in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,r,i)}}});class ni{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,si.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),si.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,r){return e instanceof ni?e._cancelAsync():e=new ni,e.setConfig(t,r),e}}let si=new Set;const oi=function(e){si.add(e)},ai=function(){const e=Boolean(si.size);return si.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};let li="string"==typeof document.head.style.touchAction,di="__polymerGesturesHandled",pi="__polymerGesturesTouchAction",ci=["mousedown","mousemove","mouseup","click"],hi=[0,1,4,2],ui=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function _i(e){return ci.indexOf(e)>-1}let fi=!1;function mi(e){if(!_i(e)&&"touchend"!==e)return li&&fi&&pt?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){fi=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let yi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const gi=[],bi={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},vi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function wi(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let r=e.getRootNode();if(e.id){let i=r.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let Si=function(e){let t=e.sourceCapabilities;var r;if((!t||t.firesTouchEvents)&&(e[di]={skip:!0},"click"===e.type)){let t=!1,i=Ai(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)gi.push(i[e]);else if(r=i[e],bi[r.localName]){let r=wi(i[e]);for(let e=0;e<r.length;e++)t=t||gi.indexOf(r[e])>-1}if(i[e]===xi.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Pi(e){let t=yi?["click"]:ci;for(let r,i=0;i<t.length;i++)r=t[i],e?(gi.length=0,document.addEventListener(r,Si,!0)):document.removeEventListener(r,Si,!0)}function Ci(e){let t=e.type;if(!_i(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!ui&&(t=hi[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let xi={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ei(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Oi(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){xi.mouse.mouseIgnoreJob||Pi(!0),xi.mouse.target=Ai(e)[0],xi.mouse.mouseIgnoreJob=ni.debounce(xi.mouse.mouseIgnoreJob,nr.after(2500),(function(){Pi(),xi.mouse.target=null,xi.mouse.mouseIgnoreJob=null}))}),!!fi&&{passive:!0});const Ai=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Ti={},Ni=[];function ki(e){const t=Ai(e);return t.length>0?t[0]:e.target}function Ii(e){let t,r=e.type,i=e.currentTarget.__polymerGestures;if(!i)return;let n=i[r];if(n){if(!e[di]&&(e[di]={},"touch"===r.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===r&&1===e.touches.length&&(xi.touch.id=t.identifier),xi.touch.id!==t.identifier)return;li||"touchstart"!==r&&"touchmove"!==r||function(e){let t=e.changedTouches[0],r=e.type;if("touchstart"===r)xi.touch.x=t.clientX,xi.touch.y=t.clientY,xi.touch.scrollDecided=!1;else if("touchmove"===r){if(xi.touch.scrollDecided)return;xi.touch.scrollDecided=!0;let r=function(e){let t="auto",r=Ai(e);for(let e,i=0;i<r.length;i++)if(e=r[i],e[pi]){t=e[pi];break}return t}(e),i=!1,n=Math.abs(xi.touch.x-t.clientX),s=Math.abs(xi.touch.y-t.clientY);e.cancelable&&("none"===r?i=!0:"pan-x"===r?i=s>n:"pan-y"===r&&(i=n>s)),i?e.preventDefault():Hi("track")}}(e)}if(t=e[di],!t.skip){for(let r,i=0;i<Ni.length;i++)r=Ni[i],n[r.name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(let i,s=0;s<Ni.length;s++)i=Ni[s],n[i.name]&&!t[i.name]&&(t[i.name]=!0,i[r](e))}}}function Mi(e,t,r){return!!Ti[t]&&(function(e,t,r){let i=Ti[t],n=i.deps,s=i.name,o=e.__polymerGestures;o||(e.__polymerGestures=o={});for(let t,r,i=0;i<n.length;i++)t=n[i],yi&&_i(t)&&"click"!==t||(r=o[t],r||(o[t]=r={_count:0}),0===r._count&&e.addEventListener(t,Ii,mi(t)),r[s]=(r[s]||0)+1,r._count=(r._count||0)+1);e.addEventListener(t,r),i.touchAction&&Li(e,i.touchAction)}(e,t,r),!0)}function Di(e,t,r){return!!Ti[t]&&(function(e,t,r){let i=Ti[t],n=i.deps,s=i.name,o=e.__polymerGestures;if(o)for(let t,r,i=0;i<n.length;i++)t=n[i],r=o[t],r&&r[s]&&(r[s]=(r[s]||1)-1,r._count=(r._count||1)-1,0===r._count&&e.removeEventListener(t,Ii,mi(t)));e.removeEventListener(t,r)}(e,t,r),!0)}function Ri(e){Ni.push(e);for(let t=0;t<e.emits.length;t++)Ti[e.emits[t]]=e}function Li(e,t){li&&e instanceof HTMLElement&&sr.run(()=>{e.style.touchAction=t}),e[pi]=t}function Fi(e,t,r){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,Ft(e).dispatchEvent(i),i.defaultPrevented){let e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Hi(e){let t=function(e){for(let t,r=0;r<Ni.length;r++){t=Ni[r];for(let r,i=0;i<t.emits.length;i++)if(r=t.emits[i],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function zi(e,t,r,i){t&&Fi(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:function(e){return Hi(e)}})}function $i(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),n=Math.abs(e.y-r);return i>=5||n>=5}function ji(e,t,r){if(!t)return;let i,n=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,a=s.y-e.y,l=0;n&&(i=s.x-n.x,l=s.y-n.y),Fi(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:o,dy:a,ddx:i,ddy:l,sourceEvent:r,hover:function(){return function(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(r=i)}return r}(r.clientX,r.clientY)}})}function Ui(e,t,r){let i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),s=ki(r||t);!s||vi[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=ki(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(t))&&(e.prevent||Fi(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}Ri({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Oi(this.info)},mousedown:function(e){if(!Ci(e))return;let t=ki(e),r=this;Ei(this.info,(function(e){Ci(e)||(zi("up",t,e),Oi(r.info))}),(function(e){Ci(e)&&zi("up",t,e),Oi(r.info)})),zi("down",t,e)},touchstart:function(e){zi("down",ki(e),e.changedTouches[0],e)},touchend:function(e){zi("up",ki(e),e.changedTouches[0],e)}}),Ri({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Oi(this.info)},mousedown:function(e){if(!Ci(e))return;let t=ki(e),r=this,i=function(e){let i=e.clientX,n=e.clientY;$i(r.info,i,n)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&Hi("tap"),r.info.addMove({x:i,y:n}),Ci(e)||(r.info.state="end",Oi(r.info)),t&&ji(r.info,t,e),r.info.started=!0)};Ei(this.info,i,(function(e){r.info.started&&i(e),Oi(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=ki(e),r=e.changedTouches[0],i=r.clientX,n=r.clientY;$i(this.info,i,n)&&("start"===this.info.state&&Hi("tap"),this.info.addMove({x:i,y:n}),ji(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=ki(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),ji(this.info,t,r))}}),Ri({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Ci(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Ci(e)&&Ui(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Ui(this.info,e.changedTouches[0],e)}});const Bi=Ct(e=>class extends e{_addEventListenerToNode(e,t,r){Mi(e,t,r)||super._addEventListenerToNode(e,t,r)}_removeEventListenerFromNode(e,t,r){Di(e,t,r)||super._removeEventListenerFromNode(e,t,r)}}),Vi=/:host\(:dir\((ltr|rtl)\)\)/g,qi=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Yi=/:dir\((?:ltr|rtl)\)/,Ji=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Wi=[];let Xi=null,Gi="";function Zi(){Gi=document.documentElement.getAttribute("dir")}function Ki(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Gi)}}function Qi(){Zi(),Gi=document.documentElement.getAttribute("dir");for(let e=0;e<Wi.length;e++)Ki(Wi[e])}const en=Ct(e=>{Ji||Xi||(Zi(),Xi=new MutationObserver(Qi),Xi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=pr(e);class r extends t{static _processStyleText(e,r){return e=t._processStyleText.call(this,e,r),!Ji&&Yi.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Vi,':host([dir="$1"])'),t=t.replace(qi,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Xi&&Xi.takeRecords().length&&Qi(),Wi.push(this),Ki(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Wi.indexOf(this);e>-1&&Wi.splice(e,1)}}}return r.__activateDir=!1,r});function tn(){document.body.removeAttribute("unresolved")}function rn(e,t,r){return{index:e,removed:t,addedCount:r}}"interactive"===document.readyState||"complete"===document.readyState?tn():window.addEventListener("DOMContentLoaded",tn);function nn(e,t,r,i,n,s){let o,a=0,l=0,d=Math.min(r-t,s-n);if(0==t&&0==n&&(a=function(e,t,r){for(let i=0;i<r;i++)if(!on(e[i],t[i]))return i;return r}(e,i,d)),r==e.length&&s==i.length&&(l=function(e,t,r){let i=e.length,n=t.length,s=0;for(;s<r&&on(e[--i],t[--n]);)s++;return s}(e,i,d-a)),n+=a,s-=l,(r-=l)-(t+=a)==0&&s-n==0)return[];if(t==r){for(o=rn(t,[],0);n<s;)o.removed.push(i[n++]);return[o]}if(n==s)return[rn(t,[],r-t)];let p=function(e){let t=e.length-1,r=e[0].length-1,i=e[t][r],n=[];for(;t>0||r>0;){if(0==t){n.push(2),r--;continue}if(0==r){n.push(3),t--;continue}let s,o=e[t-1][r-1],a=e[t-1][r],l=e[t][r-1];s=a<l?a<o?a:o:l<o?l:o,s==o?(o==i?n.push(0):(n.push(1),i=o),t--,r--):s==a?(n.push(3),t--,i=a):(n.push(2),r--,i=l)}return n.reverse(),n}(function(e,t,r,i,n,s){let o=s-n+1,a=r-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let r=1;r<o;r++)for(let s=1;s<a;s++)if(on(e[t+s-1],i[n+r-1]))l[r][s]=l[r-1][s-1];else{let e=l[r-1][s]+1,t=l[r][s-1]+1;l[r][s]=e<t?e:t}return l}(e,t,r,i,n,s));o=void 0;let c=[],h=t,u=n;for(let e=0;e<p.length;e++)switch(p[e]){case 0:o&&(c.push(o),o=void 0),h++,u++;break;case 1:o||(o=rn(h,[],0)),o.addedCount++,h++,o.removed.push(i[u]),u++;break;case 2:o||(o=rn(h,[],0)),o.addedCount++,h++;break;case 3:o||(o=rn(h,[],0)),o.removed.push(i[u]),u++}return o&&c.push(o),c}function sn(e,t){return nn(e,0,e.length,t,0,t.length)}function on(e,t){return e===t}function an(e){return"slot"===e.localName}let ln=class{static getFlattenedNodes(e){const t=Ft(e);return an(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>an(e)?Ft(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){an(this._target)?this._listenSlots([this._target]):Ft(this._target).children&&(this._listenSlots(Ft(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){an(this._target)?this._unlistenSlots([this._target]):Ft(this._target).children&&(this._unlistenSlots(Ft(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,sr.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=sn(t,this._effectiveNodes);for(let t,i=0;i<r.length&&(t=r[i]);i++)for(let r,i=0;i<t.removed.length&&(r=t.removed[i]);i++)e.removedNodes.push(r);for(let i,n=0;n<r.length&&(i=r[n]);n++)for(let r=i.index;r<i.index+i.addedCount;r++)e.addedNodes.push(t[r]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];an(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];an(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};const dn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ai()}while(e||t)},pn=Element.prototype,cn=pn.matches||pn.matchesSelector||pn.mozMatchesSelector||pn.msMatchesSelector||pn.oMatchesSelector||pn.webkitMatchesSelector,hn=function(e,t){return cn.call(e,t)};class un{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new ln(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Ft(this.node).contains(e))return!0;let t=e,r=e.ownerDocument;for(;t&&t!==r&&t!==this.node;)t=Ft(t).parentNode||Ft(t).host;return t===this.node}getOwnerRoot(){return Ft(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Ft(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Ft(this.node).assignedSlot;for(;t;)e.push(t),t=Ft(t).assignedSlot;return e}importNode(e,t){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return Ft(r).importNode(e,t)}getEffectiveChildNodes(){return ln.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),r=[];for(let i,n=0,s=t.length;n<s&&(i=t[n]);n++)i.nodeType===Node.ELEMENT_NODE&&hn(i,e)&&r.push(i);return r}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function _n(e,t){for(let r=0;r<t.length;r++){let i=t[r];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class fn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let mn=un;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(un.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=un.prototype[t])}),_n(e.prototype,["classList"]),mn=e,Object.defineProperties(fn.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&yn(e).getOwnerRoot(),r=this.path;for(let e=0;e<r.length;e++){const i=r[e];if(yn(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let r=0;r<t.length;r++){let i=t[r];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(un.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),_n(un.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let r=0;r<t.length;r++){let i=t[r];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(un.prototype,["textContent","innerHTML","className"]);const yn=function(e){if((e=e||document)instanceof mn)return e;if(e instanceof fn)return e;let t=e.__domApi;return t||(t=e instanceof Event?new fn(e):new mn(e),e.__domApi=t),t},gn=window.ShadyDOM,bn=window.ShadyCSS;function vn(e,t){return Ft(e).getRootNode()===t}const wn=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};Ct(e=>{const t=ii(e);let r=wn(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,r,i){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==r&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Ft(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,r,i)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});let Sn=window.ShadyCSS;const Pn=Ct(e=>{const t=Bi(ii(e)),r=ri?t:en(t),i=wn(r),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,r){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,r,null)}setAttribute(e,t){if(wt&&!this._legacyForceObservedAttributes){const r=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,r,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(wt&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return wt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):i.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,r,i){t!==r&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==r&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Ft(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,r,i),this.attributeChanged(e,t,r)))}attributeChanged(e,t,r){}_initializeProperties(){if(ut&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),wt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,r=e.length;t<r;t++){const r=e[t];this.__attributeReaction(r.name,null,r.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,r){this._propertyToAttribute(e,t,r)}serializeValueToAttribute(e,t,r){this._valueToNodeAttribute(r||this,e,t)}extend(e,t){if(!e||!t)return e||t;let r=Object.getOwnPropertyNames(t);for(let i,n=0;n<r.length&&(i=r[n]);n++){let r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(e,i,r)}return e}mixin(e,t){for(let r in t)e[r]=t[r];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,r){r=r||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});i.detail=t;let n=r.node||this;return Ft(n).dispatchEvent(i),i}listen(e,t,r){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),n=i.get(e);n||(n={},i.set(e,n));let s=t+r;n[s]||(n[s]=this._addMethodEventListenerToNode(e,t,r,this))}unlisten(e,t,r){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),n=t+r,s=i&&i[n];s&&(this._removeEventListenerFromNode(e,t,s),i[n]=null)}setScrollDirection(e,t){Li(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Ft(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=yn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return yn(this).getEffectiveChildNodes()}queryDistributedElements(e){return yn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let r,i=0;r=e[i];i++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?yn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Ft(this).contains(e)&&Ft(this).getRootNode()===Ft(e).getRootNode()}isLocalDescendant(e){return this.root===Ft(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!gn||!bn)return null;if(!gn.handlesDynamicScoping)return null;const r=bn.ScopingShim;if(!r)return null;const i=r.scopeForNode(e),n=Ft(e).getRootNode(),s=e=>{if(!vn(e,n))return;const t=Array.from(gn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const s=t[e];if(!vn(s,n))continue;const o=r.currentScopeForNode(s);o!==i&&(""!==o&&r.unscopeNode(s,o),r.scopeNode(s,i))}};if(s(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const r=e[t];for(let e=0;e<r.addedNodes.length;e++){const t=r.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&s(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Sn.getComputedStyleValue(this,e)}debounce(e,t,r){return this._debouncers=this._debouncers||{},this._debouncers[e]=ni.debounce(this._debouncers[e],r>0?nr.after(r):sr,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?nr.run(e.bind(this),t):~sr.run(e.bind(this))}cancelAsync(e){e<0?sr.cancel(~e):nr.cancel(e)}create(e,t){let r=document.createElement(e);if(t)if(r.setProperties)r.setProperties(t);else for(let e in t)r[e]=t[e];return r}elementMatches(e,t){return hn(t||this,e)}toggleAttribute(e,t){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(t=!r.hasAttribute(e)),t?(Ft(r).setAttribute(e,""),!0):(Ft(r).removeAttribute(e),!1)}toggleClass(e,t,r){r=r||this,1==arguments.length&&(t=!r.classList.contains(e)),t?r.classList.add(e):r.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,r,i){i=i||this,this.transform("translate3d("+e+","+t+","+r+")",i)}arrayDelete(e,t){let r;if(Array.isArray(e)){if(r=e.indexOf(t),r>=0)return e.splice(r,1)}else{if(r=qt(this,e).indexOf(t),r>=0)return this.splice(e,r,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return s.prototype.is="",s}),Cn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},xn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},En=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},xn);function On(e,t,r,i){!function(e,t,r){const i=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let s=0;s<n.length;s++){let o=n[s];if(!(o in r))if(i)t[o]=e[o];else{let r=Object.getOwnPropertyDescriptor(e,o);r&&(r.configurable=!0,Object.defineProperty(t,o,r))}}}(t,e,i);for(let e in Cn)t[e]&&(r[e]=r[e]||[],r[e].push(t[e]))}function An(e,t){for(const r in t){const i=e[r],n=t[r];e[r]=!("value"in n)&&i&&"value"in i?Object.assign({value:i.value},n):n}}const Tn=Pn(HTMLElement);function Nn(e,t,r){let i;const n={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)An(t,i[e].properties);return An(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,r=0;r<i.length;r++)e=i[r],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=n.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=s.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),ut&&o(e);const t=Object.getPrototypeOf(this);let r=n.beforeRegister;if(r)for(let e=0;e<r.length;e++)r[e].call(t);if(r=n.registered,r)for(let e=0;e<r.length;e++)r[e].call(t)}}_applyListeners(){super._applyListeners();const e=n.listeners;if(e)for(let t=0;t<e.length;t++){const r=e[t];if(r)for(let e in r)this._addMethodEventListenerToNode(this,e,r[e])}}_ensureAttributes(){const e=n.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const r=e[t];for(let e in r)this._ensureAttribute(e,r[e])}super._ensureAttributes()}ready(){super.ready();let e=n.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=n.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=n.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,r){super.attributeChanged();let i=n.attributeChanged;if(i)for(let n=0;n<i.length;n++)i[n].call(this,e,t,r)}}if(r){Array.isArray(r)||(r=[r]);let e=t.prototype.behaviors;i=function e(t,r,i){r=r||[];for(let n=t.length-1;n>=0;n--){let s=t[n];s?Array.isArray(s)?e(s,r):r.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&r.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return r}(r,null,e),s.prototype.behaviors=e?e.concat(r):i}const o=t=>{i&&function(e,t,r){for(let i=0;i<t.length;i++)On(e,t[i],r,En)}(t,i,n),On(t,e,n,xn)};return ut||o(s.prototype),s.generatedFrom=e,s}const kn=function(e){let t;return t="function"==typeof e?e:kn.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};function In(e,t,r,i,n){let s;n&&(s="object"==typeof r&&null!==r,s&&(i=e.__dataTemp[t]));let o=i!==r&&(i==i||r==r);return s&&o&&(e.__dataTemp[t]=r),o}kn.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let r=t?t(Tn):Tn;return r=Nn(e,r,e.behaviors),r.is=r.prototype.is=e.is,r};const Mn=Ct(e=>class extends e{_shouldPropertyChange(e,t,r){return In(this,e,t,r,!0)}}),Dn=Ct(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,r){return In(this,e,t,r,this.mutableData)}});Mn._mutablePropertyChange=In;let Rn=null;function Ln(){return Rn}Ln.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ln,writable:!0}});const Fn=Qr(Ln),Hn=Mn(Fn);const zn=Qr(class{});function $n(e,t){for(let r=0;r<t.length;r++){let i=t[r];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),Ft(Ft(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&Ft(Ft(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}class jn extends zn{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,r(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,r)}}_showHideChildren(e){$n(e,this.children)}_setUnmanagedPropertyToNode(e,t,r){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(e,t,r)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}const Un=Mn(jn);function Bn(e){let t=e.__dataHost;return t&&t._methodHost||t}function Vn(e,t,r){let i=r.mutableData?Un:jn;Wn.mixin&&(i=Wn.mixin(i));let n=class extends i{};return n.prototype.__templatizeOptions=r,n.prototype._bindTemplate(e),function(e,t,r,i){let n=r.hostProps||{};for(let t in i.instanceProps){delete n[t];let r=i.notifyInstanceProp;r&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Jn(t,r)})}if(i.forwardHostProp&&t.__dataHost)for(let t in n)r.hasHostProps||(r.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,r){e.__dataHost._setPendingPropertyOrPath("_host_"+t,r[t],!0,!0)}})}(n,e,t,r),n}function qn(e,t,r,i){let n=r.forwardHostProp;if(n&&t.hasHostProps){const s="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(s){let e=r.mutableData?Hn:Fn;class i extends e{}o=t.templatizeTemplateClass=i}else{const r=e.constructor;class i extends r{}o=t.templatizeTemplateClass=i}let a=t.hostProps;for(let e in a)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Yn(e,n)}),o.prototype._createNotifyingProperty("_host_"+e);_t&&i&&function(e,t,r){const i=r.constructor._properties,{propertyEffects:n}=e,{instanceProps:s}=t;for(let e in n)if(!(i[e]||s&&s[e])){const t=n[e];for(let r=0;r<t.length;r++){const{part:i}=t[r].info;if(!i.signature||!i.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,r,i)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)!function(e,t){Rn=e,Object.setPrototypeOf(e,t.prototype),new t,Rn=null}(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const r=t.hostProps;for(let t in r)if(t="_host_"+t,t in e){const r=e[t];delete e[t],e.__data[t]=r}}}}function Yn(e,t){return function(e,r,i){t.call(e.__templatizeOwner,r.substring("_host_".length),i[r])}}function Jn(e,t){return function(e,r,i){t.call(e.__templatizeOwner,e,r,i[r])}}function Wn(e,t,r){if(ct&&!Bn(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:jn)._parseTemplate(e),n=i.templatizeInstanceClass;n||(n=Vn(e,i,r),i.templatizeInstanceClass=n);const s=Bn(e);qn(e,i,r,s);let o=class extends n{};return o.prototype._methodHost=s,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=i.hostProps,o=o,o}let Xn=!1;function Gn(){if(ut&&!ot){if(!Xn){Xn=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const Zn=Bi(Dn(Qr(HTMLElement)));customElements.define("dom-bind",class extends Zn{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ct)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,r,i){this.mutableData=!0}connectedCallback(){Gn()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Ft(Ft(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});class Kn{constructor(e){this.value=e.toString()}toString(){return this.value}}function Qn(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Kn)return function(e){if(e instanceof Kn)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}(e);throw new Error("non-template value passed to Polymer's html function: "+e)}const es=function(e,...t){const r=document.createElement("template");return r.innerHTML=t.reduce((t,r,i)=>t+Qn(r)+e[i+1],e[0]),r},ts=ii(HTMLElement),rs=Dn(ts);class is extends rs{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!vt,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),Gn()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=Ft(Ft(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=Wn(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(e,t){let r=this.__instances;for(let i,n=0;n<r.length&&(i=r[n]);n++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,r){if((i=this.as)===(n=t)||$t(i,n)||jt(i,n)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=r);let n=Ut(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(n,r)}var i,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,r=this.__getMethodHost();return function(){return r[t].apply(r,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let r=0;r<t.length;r++)0===e.indexOf(t[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=ni.debounce(this.__renderDebouncer,t>0?nr.after(t):sr,e.bind(this)),oi(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),dn()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),r=this.__calculateLimit(t.length);this.__updateInstances(e,r,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),vt&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let r=0;r<e.length;r++)t[r]=r;return this.__filterFn&&(t=t.filter((t,r,i)=>this.__filterFn(e[t],r,i))),this.__sortFn&&t.sort((t,r)=>this.__sortFn(e[t],e[r])),t}__calculateLimit(e){let t=e;const r=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),i=Math.max(t-r,0),this.__chunkCount=i||1):(i=Math.min(Math.max(e-r,0),this.__chunkCount),t=Math.min(r+i,e)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,r){const i=this.__itemsIdxToInstIdx={};let n;for(n=0;n<t;n++){let t=this.__instances[n],s=r[n],o=e[s];i[s]=n,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,n),t._setPendingProperty(this.itemsIndexAs,s),t._flushProperties()):this.__insertInstance(o,n,s)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const r=Ft(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];r.appendChild(i)}return t}__attachInstance(e,t){let r=this.__instances[e];t.insertBefore(r.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,r){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=r,new this.__ctor(i)}__insertInstance(e,t,r){const i=this.__stampInstance(e,t,r);let n=this.__instances[t+1],s=n?n.children[0]:this;return Ft(Ft(this).parentNode).insertBefore(i.root,s),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let r=e.slice(6),i=r.indexOf("."),n=i<0?r:r.substring(0,i);if(n==parseInt(n,10)){let e=i<0?"":r.substring(i+1);this.__handleObservedPaths(e);let s=this.__itemsIdxToInstIdx[n],o=this.__instances[s];if(o){let r=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(r,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let r;for(;t;)if(r=t.__dataHost?t:t.__templatizeInstance){if(r.__dataHost==e)return r;t=r.__dataHost}else t=Ft(t).parentNode;return null}(this.template,e)}}customElements.define(is.is,is);class ns extends ts{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ni.debounce(this.__renderDebouncer,sr,()=>this.__render()),oi(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Ft(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Ft(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Gn()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:Ft(e).querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!Ft(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=Ft(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(Ft(this).previousSibling!==t[t.length-1])for(let r,i=0;i<t.length&&(r=t[i]);i++)Ft(e).insertBefore(r,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){dn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),vt&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const ss=bt?class extends ns{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(ct&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=t._bindTemplate(this.__template,!0);r.runEffects=(e,t,r)=>{let i=this.__syncInfo;if(this.if)i&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(i.changedProps,t)),e(t,r);else if(this.__instance)if(i||(i=this.__syncInfo={runEffects:e,changedProps:{}}),r)for(const e in t){const t=zt(e);i.changedProps[t]=this.__dataHost[t]}else Object.assign(i.changedProps,t)},this.__instance=t._stampTemplate(this.__template,r),Ft(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,$n(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends ns{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Wn(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[zt(e)]=!0))}})),this.__instance=new this.__ctor,Ft(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Ft(e[0]).parentNode;if(t){t=Ft(t);for(let r,i=0;i<e.length&&(r=e[i]);i++)t.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(ss.is,ss);let os=Ct(e=>{let t=ii(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let r=t.path;if(r==JSCompiler_renameProperty("items",this)){let r=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=sn(r,i);this.__applySplices(e)}this.__lastItems=r,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{let e=r.slice((JSCompiler_renameProperty("items",this)+".").length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let r=0;r<e.length;r++){let i=e[r];t.forEach((e,r)=>{e<i.index||(e>=i.index+i.removed.length?t.set(r,e+i.addedCount-i.removed.length):t.set(r,-1))});for(let e=0;e<i.addedCount;e++){let r=i.index+e;t.has(this.items[r])&&t.set(this.items[r],r)}}this.__updateLinks();let r=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,t.delete(i)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((r,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let r;this.__selectedMap.delete(e),this.multi&&(r=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(ts);class as extends os{static get is(){return"array-selector"}static get template(){return null}}customElements.define(as.is,as);const ls=new Ge;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){ls.processStyles(),Te(e,t)},styleElement(e){ls.processStyles()},styleDocument(e){ls.processStyles(),Te(document.body,e)},getComputedStyleValue:(e,t)=>Ne(e,t),flushCustomStyles(){},nativeCss:ae,nativeShadow:re,cssBuild:ne,disableRuntime:oe}),window.ShadyCSS.CustomStyleInterface=ls;const ds=window.ShadyCSS.CustomStyleInterface;class ps extends HTMLElement{constructor(){super(),this._style=null,ds.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),r="";for(let e=0;e<t.length;e++)r+=Lt(t[e]);return r}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ps);Pn(HTMLElement).prototype;let cs;const hs=es(cs||(cs=(e=>e)`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`));hs.setAttribute("style","display: none;"),document.head.appendChild(hs.content);var us=document.createElement("style");us.textContent="[hidden] { display: none !important; }",document.head.appendChild(us);let _s;kn({_template:es(_s||(_s=(e=>e)`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`)),is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var r=this._resolveSrc(e);r!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=r,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=it(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}});let fs;const ms=es(fs||(fs=(e=>e)`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`));ms.setAttribute("style","display: none;"),document.head.appendChild(ms.content);let ys;const gs=es(ys||(ys=(e=>e)`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`));gs.setAttribute("style","display: none;"),document.head.appendChild(gs.content);let bs;const vs=es(bs||(bs=(e=>e)`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`));vs.setAttribute("style","display: none;"),document.head.appendChild(vs.content);let ws;const Ss=es(ws||(ws=(e=>e)`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`));Ss.setAttribute("style","display: none;"),document.head.appendChild(Ss.content);let Ps;kn({_template:es(Ps||(Ps=(e=>e)`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`)),is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),r=this.getAttribute("aria-label");"string"==typeof r&&r!==t||this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}});let Cs,xs,Es=e=>e;window.customElements.define("rickmorty-card",class extends K{static get styles(){return G(Cs||(Cs=Es`:host{display:inline-flex;padding:25px;color:var(--rickmorty-card-text-color,#000)}`))}static get properties(){return{name:{type:String},id:{type:String},imgUrl:{type:String}}}constructor(){super(),this.name="",this.id="",this.imgUrl=""}render(){return L(xs||(xs=Es` <paper-card> <img src="${0}" alt="Image"> <strong><p>Name: ${0}</p></strong> <strong><p>ID: ${0}</p></strong> </paper-card> `),this.imgUrl,this.name,this.id)}});let Os,As,Ts,Ns=e=>e;customElements.define("rickmorty-app",class extends K{static get properties(){return{title:{type:String},personajes:{type:Array}}}static get styles(){return G(Os||(Os=Ns`:host{padding:25px;color:#1a2b42}`))}constructor(){super(),this.personajes=[]}render(){return L(As||(As=Ns` <rickmorty-api @cargar="${0}"></rickmorty-api> ${0} `),this.infoReceived,this.personajes.map(e=>L(Ts||(Ts=Ns`<rickmorty-card name="${0}" id="${0}" imgUrl="${0}"></rickmorty-card>`),e.name,e.id,e.image)))}infoReceived(e){this.personajes=e.detail}});
