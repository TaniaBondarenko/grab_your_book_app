/** @jsx createElement */
/** @jsxFrag createFragment */
import renderApp from '../framework/render';
import dataStore from '../data/dataStore';

const doFilter = function (filterValue) {
  dataStore.isNotFiltered = false;
  dataStore.filteredBooks = dataStore.theBooksInfo.filter(book => {
    return (
      (book.categories !== undefined && book.categories.join() === filterValue.toLocaleString()) ||
      (book.language !== undefined && book.language === filterValue.toLocaleString())
    );
  });
  dataStore.filteredBooks;
  renderApp();
  document.querySelector(`option[value='${filterValue}']`).setAttribute('selected', true);
};

export default doFilter;
