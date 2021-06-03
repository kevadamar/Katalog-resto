class MainContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main id="content">
        <section id="content">
            <div id="contentList"></div>
        </section>
    </main>`;
  }
}

customElements.define('main-content', MainContent);
