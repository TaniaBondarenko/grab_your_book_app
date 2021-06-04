/** @jsx createElement */
/** @jsxFrag createFragment */
import renderApp from '../framework/render';
import dataStore from '../data/dataStore';

const DoSearch = function (searchValue) {
  dataStore.isNotFiltered = true;
  dataStore.searchValue = searchValue;
  dataStore.filteredBooks = dataStore.theBooksInfo
    .filter(book => {
      return book.title && book.authors;
    })
    .filter(book => {
      return (
        book.title.toLocaleString().toLowerCase().includes(searchValue) ||
        book.authors.join(' ').split(' ').join('').toLowerCase().includes(searchValue)
      );
    });
  dataStore.isNotFiltered = false;
  renderApp();
  document.querySelector('.searchWord').value = dataStore.searchValue;
};

export default DoSearch;
