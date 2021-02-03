import { LitElement, html } from "lit-element";
import { collapsibleItemStyles } from "./collapsible-Item-styles";

export class CollapsibleItem extends LitElement {
  static get is() {
    return "collapsible-item";
  }

  static get properties() {
    return {
      /**
       * An Object item with a title and a description.
       * @property
       * @type {Object}
       */
      item: { type: Object },
      /**
       * Boolean that determines if one of the elements of the collapsible is open.
       * @property
       * @type {Boolean}
       */
      open: { type: Boolean, reflect: true },
      /**
       * When the element is close is true and it add border-bottom to component container.
       * @property
       * @type {Boolean}
       */
      noBorder: { type: Boolean },
      /**
       * Is a string of the element selected.
       * @property
       * @type {String}
       */
      id: { type: String },
    };
  }

  static get styles() {
    return [collapsibleItemStyles];
  }

  constructor() {
    super();
    this.item = null;
    this.open = false;
    this.noBorder = false;
    this.id = "";
  }

  render() {
    return html`
      <div
        class="collapsible-item ${this.noBorder
          ? "list__item list__item--no-border"
          : "list__item"}"
      >
        <div class="list__header">
          <h2 class="list__title">${this.item.title}</h2>
          <button
            aria-label="${!this.open ? "Abrir para ver dirección" : "Cerrar"}"
            name="collipsable list button"
            class=" ${!this.open ? "list__toggle" : "list__toggle--plus"}"
            @click="${this.toggleItem}"
          ></button>
        </div>
        <div class="list__body" ?hidden="${!this.open}">
          ${Object.values(this.item.description[0]).map(
            (element) =>
              html`
                <a
                  class="list__body-link"
                  href=${element.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dirección de oficina, abre Google Maps en otra ventana"
                >
                  <div class="list__body-description">
                    <img
                      class="list__body-description__icon"
                      src="/images/location-maps-icon.svg"
                      alt="ubication icon"
                      title="Icono de ubicación"
                    />
                    <div class="list__body-description__content">
                      <p class="address__element">${element.street}</p>
                      <p class="address__element">${element.cpCity}</p>
                    </div>
                  </div>
                </a>
              `
          )}
        </div>
      </div>
    `;
  }

  toggleItem() {
    this.open = !this.open;
    this.dispatchOpen({ id: this.id, open: this.open });
  }

  dispatchOpen(detail) {
    const event = new CustomEvent("item:open", {
      detail,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
