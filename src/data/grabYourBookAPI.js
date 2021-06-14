import renderApp from '../framework/render';
import dataStore from '../data/dataStore';

export default function getTheBooks(URL) {
  dataStore.isDataLoading = true;
  renderApp();
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      return (dataStore.theBooksInfo = result.items.map(el => el.volumeInfo));
    })
    .finally(() => {
      dataStore.isDataLoading = false;
      dataStore.isNotFiltered = true;
      renderApp();
    })
    .catch(error => {
      throw new Error('Data loading failed.');
    });
  return Promise.resolve({});
}

export const baseURL = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&${process.env.THE_KEY}`;

export const getRandomBooks = function (word) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}&subject:drama&orderBy=newest&maxResults=4&${process.env.THE_KEY}`;
  getTheBooks(URL);
};
