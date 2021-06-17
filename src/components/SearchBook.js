import dataStore from '../data/dataStore';

const SearchBook = function (searchValue, props) {
  props.setFilter(searchValue);
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
};

export default SearchBook;
