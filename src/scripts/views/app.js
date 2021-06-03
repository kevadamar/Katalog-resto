import routes from '../routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

/* import component reusable */
import './components/app-bar';
import './components/skip-content';
import './components/hero-element';
import './components/search-bar';
import './components/main-content';
import './components/footer';
import './components/button-element';
import './components/input-review';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url];
    if (page === undefined) page = routes['/404'];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
