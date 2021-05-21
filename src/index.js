import styles from '../styles.css';
import renderApp from './framework/render';
import ShowBooks from './components/ShowBooks';
import { getTheBooks, getRandomBooks, showAllBooks } from './data/grabYourBookAPI';
import { getValues, randomWord } from './data/booksData';
import dataStore from './data/dataStore';

window.renderApp = renderApp;
window.getValues = getValues;
window.getTheBooks = getTheBooks;
window.ShowBooks = ShowBooks;
window.styles = styles;
window.dataStore = dataStore;

if (module.hot) {
  module.hot.accept();
}

const doFilter = function (filterValue) {
  window.dataStore.isNotFiltered = false;
  window.dataStore.filterValue = filterValue;
  window.dataStore.filteredBooks = window.dataStore.theBooksInfo.filter(book => {
    return (
      (book.categories !== undefined && book.categories.join() === filterValue.toLocaleString()) ||
      (book.language !== undefined && book.language === filterValue.toLocaleString())
    );
  });
  window.dataStore.filteredBooks;
  window.renderApp();
  if (filterValue === window.dataStore.filterValue) {
    document
      .querySelector(`option[value='${window.dataStore.filterValue}']`)
      .setAttribute('selected', true);
  }
};

const DoSearch = function (searchValue) {
  window.dataStore.isNotFiltered = true;
  window.dataStore.searchValue = searchValue;
  window.dataStore.filteredBooks = window.dataStore.theBooksInfo.filter(book => {
    return (
      book.title.toLocaleString().toLowerCase().includes(searchValue) ||
      book.authors.join(' ').split(' ').join('').toLowerCase().includes(searchValue)
    );
  });
  window.dataStore.isNotFiltered = false;
  window.renderApp();
  document.querySelector('.searchWord').value = window.dataStore.searchValue;
};

window.doFilter = doFilter;
window.DoSearch = DoSearch;
window.getRandomBooks = getRandomBooks;
window.randomWord = randomWord;
window.showAllBooks = showAllBooks;
renderApp();
