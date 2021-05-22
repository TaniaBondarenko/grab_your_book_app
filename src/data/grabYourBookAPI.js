export default function getTheBooks(URL) {
  window.renderApp();
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      return (window.dataStore.theBooksInfo = result.items.map(el => el.volumeInfo));
    })
    .then(() => renderApp())
    .catch(error => {
      throw new Error('Data loading failed.');
    });
  return Promise.resolve({});
}

export const baseURL = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&${process.env.THE_KEY}`;

export const getRandomBooks = function (word) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}&subject:drama&orderBy=newest&maxResults=4&${process.env.THE_KEY}`;
  getTheBooks(URL);
  window.dataStore.isNotFiltered = true;
};

export const showAllBooks = function () {
  URL = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&${process.env.THE_KEY}`;
  getTheBooks(URL);
  window.dataStore.isNotFiltered = true;
};
