import {Component, Host, h, Prop, State, EventEmitter, Event} from '@stencil/core';

@Component({
  tag: 'weather-widget',
  styleUrl: 'weather-widget.css',
  shadow: true,
})
export class WeatherWidget {

  @Prop() size: string = "regular";
  @State() updated: string = "Sin Actualizar";
  @Event() update: EventEmitter;

  constructor() {
    setInterval(() => {
      const t = new Date().toLocaleString();
      this.updated = 'Actualizado en: ' + t;
      this.update.emit(t)
    }, 6000);
  }
  render() {
    return (
      <Host
        class={this.size === "regular" ? "size-regular" : this.size === "slim" ? "size-slim" : ""}
      >
        <slot></slot>
        <p>{this.updated}</p>
      </Host>
    );
  }

}
