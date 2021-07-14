import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/style.css'; /* CSS import */
import '../styles/responsive.css'; /* CSS import */
import '../styles/searchbar.css'; /* CSS import */
import '../styles/detail-resto.css'; /* CSS import */

import App from './views/app';
import swRegister from './utils/sw-register';
// import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.nav-menu'),
  content: document.getElementById('contentList'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
