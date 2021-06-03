class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set onChangeEvent(event) {
    this._onChangeEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <div id="search-container" class="search-container">
        <input placeholder="Search nama, kategori, menu" id="searchElement" type="search" aria-label="input search berdasarkan nama, kategori, dan menu">
    </div>
    `;

    this.querySelector('#searchElement').addEventListener(
      'input',
      this._onChangeEvent,
    );
  }
}

customElements.define('search-bar', SearchBar);
