class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header p-rl-15 bg-steelblue">
            <nav class="navbar">
                <a href="/#/" class="nav-logo">K-Resto</a>
                <button class="hamburger" aria-label="menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="/#/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#/favorite" class="nav-link">Favorite</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://kevadamargalih.netlify.app" target="_blank" rel="noopener" class="nav-link">About Us</a>
                    </li>
                </ul>
            </nav>
        </header>`;
  }
}

customElements.define('app-bar', AppBar);
