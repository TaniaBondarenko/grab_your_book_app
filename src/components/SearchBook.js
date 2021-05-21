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

export default DoSearch;
