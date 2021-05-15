import styles from './styles.css';

window.renderApp = renderApp;
window.getValues = getValues;
window.getTheBooks = getTheBooks;
window.ShowBooks = ShowBooks;
window.styles = styles;

window.dataStore = {
  isNotFiltered: true,
  isDataLoading: false,
  theBooksInfo: [],
  filteredBooks: [],
  books: [],
  random: '',
  filterValue: '',
  searchValue: '',
};

const baseURL = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&${process.env.THE_KEY}`;

if (module.hot) {
  module.hot.accept();
}

function getTheBooks(URL) {
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

function renderApp() {
  document.getElementById('app-root').innerHTML = ` ${App()} `;
}

function App() {
  return `<div class='${styles.container}'>
  <div class=${styles.navWrapper}>
            <nav class='${styles.navigation}'>
              <div class="${styles.logoWrapper}">
               <h1 class="mainHeader">Grab Your Book</h1>
              </div>
              <div class=${styles.ulWrapper}>
              <ul class="${styles.navList}">
              ${BookChoosing()}
              ${CategorySelection()}
              ${LanguageSelection()}
              ${Randomiser()}
              ${AllBooks()}
              </ul>
              </div>
            </nav>
            </div>
            <div class='${styles.bookContainer}'>
           ${ShowBooks()}
            </div>
         </div>`;
}

function BookChoosing() {
  return `<li>
            <input type="search" placeholder="Type title or author"
              class="searchWord"/>
              <button class="${styles.btn}" type='button' onclick="DoSearch(document.querySelector('.searchWord').value)">Find</button>
          </li>`;
}

function CategorySelection() {
  return `<li style="width:100%"  >
           <label for="categories">Choose a category:</label>
            <select name="categories" id="categories" class="categories" onchange="(doFilter(this.value));" >
              <option value='' >Category </option>
              ${getValues('categories')}
              </select>
          </li>`;
}

function LanguageSelection() {
  return `<li>
           <label for="language">Select language:</label>
            <select name="language" id="language" class="language" onchange="ShowBooks(doFilter(this.value));">
              <option value="" selected disabled hidden>Language</option>
              ${getValues('language')}
              </select>
          </li>`;
}

function Randomiser() {
  return `<p>Wondering what to read? <button class="${styles.btn}" type='button' onclick="getRandomBooks(randomWord())">Get advise</button></p>`;
}

function AllBooks() {
  return `<li>
              <button class="${styles.btn}" type='button' onclick="showAllBooks()">Show all</button>
          </li>`;
}

function ShowBooks() {
  if (window.dataStore.isNotFiltered) {
    window.dataStore.books = window.dataStore.theBooksInfo;
  } else {
    window.dataStore.books = window.dataStore.filteredBooks;
  }
  let content = '';
  window.dataStore.books.forEach(el => {
    content += `<div class='${styles.bookCard}'>
                              <div class='${styles.mainInfo}'> 
                              <img class='${styles.bookImg}' src=${
      el['imageLinks'].thumbnail === undefined
        ? './images/book.png'
        : `'${el['imageLinks'].thumbnail}'`
    }'>
                               <p class='bookTitle'><h3>${el['title']}</h3></p>
                               <p class='bookAuthor'>${el['authors']}</p></div>
                               <div class='${styles.aboutBook}'><h4>Description</h4><br>${
      el['description'] === undefined ? 'You should read to find out' : el['description']
    }</div>
                               </div>`;
  });
  return content ? `${content}` : 'No books found';
}

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

const randomWord = function () {
  const words = [
    'flowers',
    'season',
    'heart',
    'love',
    'forest',
    'beauty',
    'good',
    'sun',
    'dog',
    'winter',
    'lake',
    'money',
    'fun',
    'bird',
    'book',
    'king',
    'ring',
  ];
  return (window.dataStore.random = words[Math.floor(Math.random() * words.length)]);
};

const getRandomBooks = function (word) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}&subject:drama&orderBy=newest&maxResults=4&${process.env.THE_KEY}`;
  getTheBooks(URL);
  window.dataStore.isNotFiltered = true;
};

const showAllBooks = function () {
  URL = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&${process.env.THE_KEY}`;
  getTheBooks(URL);
  window.dataStore.isNotFiltered = true;
};

function getValues(valueName) {
  let valueArray = [];
  window.dataStore.theBooksInfo.forEach(el => {
    if (Array.isArray(el[`${valueName}`])) {
      if (!valueArray.includes(el[`${valueName}`].join())) {
        return valueArray.push(el[`${valueName}`].join());
      }
    } else {
      if (!valueArray.includes(el[`${valueName}`])) {
        return valueArray.push(el[`${valueName}`]);
      }
    }
  });
  return valueArray.map(function (el) {
    return `<option value='${el}'>${el}</option>`;
  });
}

window.doFilter = doFilter;
window.DoSearch = DoSearch;
window.getRandomBooks = getRandomBooks;
window.randomWord = randomWord;
window.showAllBooks = showAllBooks;

getTheBooks(baseURL);
