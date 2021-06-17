import dataStore from '../data/dataStore';

const filterBooks = function (filterValue, props) {
  props.setFilter(filterValue);
  dataStore.filteredBooks = dataStore.theBooksInfo.filter(book => {
    return (
      (book.categories !== undefined && book.categories.join() === filterValue.toLocaleString()) ||
      (book.language !== undefined && book.language === filterValue.toLocaleString())
    );
  });
  dataStore.isNotFiltered = false;
};

export default filterBooks;
