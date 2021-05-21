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

export default doFilter;
