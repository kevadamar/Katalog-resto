class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="bg-steelblue">
        <p>Copyright © 2021 - K-Resto</p>
    </footer>`;
  }
}

customElements.define('footer-bar', Footer);
