class SkipContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="#content" class="skip-to-content">Skip to content ?</a>`;
  }
}

customElements.define('skip-content', SkipContent);
