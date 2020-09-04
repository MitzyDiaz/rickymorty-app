import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import 'rickmorty-api/rickmorty-api.js'
import 'rickmorty-card/rickmorty-card.js'

export class RickmortyApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      personajes: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        padding: 25px;
        color: #1a2b42;
      }
    `;
  }

  constructor() {
    super();
    this.personajes = [];
  }

  render() {
    return html`
      <rickmorty-api @cargar="${this.infoReceived}"></rickmorty-api>
      ${this.personajes.map(personaje => html`<rickmorty-card name="${personaje.name}" id="${personaje.id}" imgUrl="${personaje.image}"></rickmorty-card>`)}
    `;
  }

  infoReceived(e) {
    this.personajes = e.detail;
  }
}