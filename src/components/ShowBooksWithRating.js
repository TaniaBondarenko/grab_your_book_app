import dataStore from '../data/dataStore';
import renderApp from '../framework/render';

export default function ShowBooksWithRating() {
  dataStore.isNotFiltered = true;
  dataStore.filteredBooks = dataStore.theBooksInfo
    .filter(el => {
      return el.averageRating;
    })
    .sort((a, b) => b.averageRating - a.averageRating);
  dataStore.isNotFiltered = false;
  renderApp();
}

export function getRated(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    star += '*';
  }
  return star;
}
