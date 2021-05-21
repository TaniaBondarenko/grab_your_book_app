import styles from '../styles.css';
import renderApp from './framework/render';
import ShowBooks from './components/ShowBooks';
import { getTheBooks, getRandomBooks, showAllBooks } from './data/grabYourBookAPI';
import { getValues, randomWord } from './data/booksData';
import dataStore from './data/dataStore';
import App from './components/App';
import doFilter from './components/FilterBooks';
import DoSearch from './components/SearchBook';

window.renderApp = renderApp;
window.getValues = getValues;
window.getTheBooks = getTheBooks;
window.ShowBooks = ShowBooks;
window.styles = styles;
window.dataStore = dataStore;
window.doFilter = doFilter;
window.DoSearch = DoSearch;
window.getRandomBooks = getRandomBooks;
window.randomWord = randomWord;
window.showAllBooks = showAllBooks;

if (module.hot) {
  module.hot.accept();
}

renderApp(App, 'app-root');
