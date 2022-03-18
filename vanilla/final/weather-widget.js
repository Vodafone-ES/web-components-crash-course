class WeatherWidget extends HTMLElement {
    static get observedAttributes() { return ['color']; }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
        this.render();
    }
    render() {
        const title = this.getAttribute('title') ?? 'No title';
        const color = this.getAttribute('color') ?? '#e60000';
        this.shadowRoot.innerHTML = `
            <style>
            :host {
                display: block;
                background-color: ${color};
                padding: 10px;
                border-radius: 5px;
                color: white;
                font-size: 1.2em;
                text-align: center;
                font-family: Arial, Helvetica, sans-serif;
            }
            ::slotted(h1) {
                color: white !important;
            }
            </style>
            <div class="weather-widget">
                <slot></slot>
                <p>Actualizado ahora mismo</p>
            </div>
        `
    }
}
window.customElements.define('weather-widget', WeatherWidget);
