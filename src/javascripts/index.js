import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import NavbarResponsive from './utilities/navbar-responsive';
import swRegister from './utilities/sw-register';
import App from './views/app';

window.addEventListener('load', () => {
  NavbarResponsive.init();
});

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
