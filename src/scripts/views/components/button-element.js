class ButtonElement extends HTMLElement {
  constructor() {
    super();
    this._stateButton = 0;
    this._textButton = {
      first: 'Lihat Lebih Sedikit',
      second: 'Lihat Selengkapnya',
    };
  }

  connectedCallback() {
    this.render();
  }

  set handleClick(event) {
    this._clickEvent = event;
    this.render();
  }

  set setStateButton(value) {
    this._stateButton = value;
    this.render();
  }

  get getStateButton() {
    return this._stateButton;
  }

  render() {
    this.innerHTML = `
        <button type="button" class="button-detail" aria-label=${
  this._stateButton ? this._textButton.first : this._textButton.second
}>${
  this._stateButton ? this._textButton.first : this._textButton.second
}</button>
        `;
    this.querySelector('.button-detail').addEventListener(
      'click',
      this._clickEvent,
    );
  }
}

customElements.define('button-element', ButtonElement);
