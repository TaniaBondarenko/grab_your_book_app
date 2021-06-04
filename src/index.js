import styles from '../styles.css';
import renderApp from './framework/render';
import App from './components/App';

window.styles = styles;

if (module.hot) {
  module.hot.accept();
}

renderApp(App, document.getElementById('app-root'));
