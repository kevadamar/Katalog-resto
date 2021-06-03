class HeroElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container d-flex-center" style="background-image: url(images/heros/hero-image_3.jpg);">
            <h1 style="color: white;">K-Resto</h1>
        </div>
        `;
  }
}

customElements.define('hero-element', HeroElement);
