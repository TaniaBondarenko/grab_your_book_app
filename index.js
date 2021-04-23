import { theBooks } from './modules/fixtures.js';
let filteredBooks;
let container;
let fragment;

document.querySelector('.buttonForAll').addEventListener('click', showContent);
function showContent() {
  document.querySelector('.mainContent').classList.add('shown');
  document.querySelector('.startPage').classList.add('hidden');
  showBooks(theBooks);
}
function createContainer() {
  container = document.querySelector('.container');
  container.innerHTML = '';
  fragment = document.createDocumentFragment();
}

function showBooks(books) {
  createContainer();
  let src;
  for (let i = 0; i < books.length; i++) {
    let bookWrapper = document.createElement('div');
    bookWrapper.classList.add('bookWrapper');
    books[i]['image'] === undefined
      ? (src = `"./images/book.png"`)
      : (src = `'${books[i]['image']}'`);
    bookWrapper.innerHTML = `<div class='bookCard'><img class='bookImg' src=${src}'>
                               <p class='bookTitle'><h3>${books[i]['title']}</h3></p>
                               <p class='bookAuthor'>${books[i]['authors']}</p>
                               </div>`;
    fragment.appendChild(bookWrapper);
  }
  container.appendChild(fragment);
  if (books.length === 0) {
    container.textContent = 'No books found according your criteria';
  }
}

function doFilter(books, ...param) {
  if (param.length === 1) {
    filteredBooks = books.filter(
      book =>
        book.categories.join().toLowerCase() === param.join() || book.language === param.join(),
    );
  } else {
    let temp = books.filter(book => book.categories.join().toLowerCase() === param[0]);
    filteredBooks = temp.filter(book => book.language === param[1]);
  }
}

document.querySelector('.navigation').addEventListener('change', renderBooks);

const category = document.querySelector('.categories');
const language = document.querySelector('.language');

function renderBooks({ target }) {
  if (target.value === category.value && language.value === '') {
    doFilter(theBooks, target.value);
  } else if (target.value === language.value && category.value === '') {
    doFilter(theBooks, target.value);
  } else if (target.value === language.value && category.value !== '') {
    doFilter(theBooks, category.value, target.value);
  } else if (target.value === category.value && language.value !== '') {
    doFilter(theBooks, target.value, language.value);
  }
  showBooks(filteredBooks);
}

const searchWord = document.querySelector('.searchWord');

function doSearch(booksArray) {
  let searchStr = searchWord.value.toLowerCase();
  filteredBooks = booksArray.filter(book => {
    return (
      book.title.split(' ').join('').toLowerCase().includes(searchStr) ||
      book.authors.join(' ').split(' ').join('').toLowerCase().includes(searchStr)
    );
  });
}
function showFoundBooks() {
  (category.value = ''), (language.value = ''), doSearch(theBooks);
  showBooks(filteredBooks);
}

searchWord.addEventListener('keyup', showFoundBooks);
