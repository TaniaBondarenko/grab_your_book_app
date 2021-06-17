import React from 'react';
import styles from '../styles.css';
import { render } from 'react-dom';
import App from './components/App';

window.styles = styles;

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('app-root'));
