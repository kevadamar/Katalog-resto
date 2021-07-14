class HeroElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container d-flex-center hero-image">
            <h1 style="color: white;">K-Resto</h1>
        </div>
        `;
  }
}

customElements.define('hero-element', HeroElement);
