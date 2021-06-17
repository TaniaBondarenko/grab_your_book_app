import dataStore from '../data/dataStore';

export default function getTheBooks(URL) {
  dataStore.isDataLoading = true;
  return fetch(URL)
    .then(response => response.json())
    .then(result => {
      dataStore.theBooksInfo = result.items.map(el => el.volumeInfo);
    })
    .finally(() => {
      dataStore.isDataLoading = false;
      dataStore.isNotFiltered = true;
      return dataStore.theBooksInfo;
    })
    .catch(error => {
      throw new Error('Data loading failed.');
    });
}

export const baseURL = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&${process.env.THE_KEY}`;

export const getRandomBooks = function (word) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}&subject:drama&orderBy=newest&maxResults=4&${process.env.THE_KEY}`;
  getTheBooks(URL);
};
