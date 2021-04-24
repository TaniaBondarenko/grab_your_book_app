//import { theBooks } from './modules/fixtures.js';
const theBooks = [
  {
    title: 'The Best American Short Plays 2018–2019',
    authors: ['John Patrick Bray'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=VLEjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: "Celia's Gifts",
    authors: ['Kimberly Diede'],
    categories: ['Fiction'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=GjEnEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: "Les Elucubrations d'un homme soudain frappé par la grâce",
    authors: ['Édouard Baer'],
    categories: ['Drama'],
    language: 'fr',
    image:
      'http://books.google.com/books/content?id=LpsXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Confessa (La salvezza della città del peccato Vol. 1)',
    authors: ['A. Zavarelli'],
    categories: ['Fiction'],
    language: 'it',
    image:
      'http://books.google.com/books/content?id=hw0OEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Dishonorable – Unehrenhaft',
    authors: ['Natasha Knight'],
    categories: ['Fiction'],
    language: 'de',
    image:
      'http://books.google.com/books/content?id=G8EDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'La Haine',
    authors: ['Yann Sartor'],
    categories: ['Classics'],
    language: 'fr',
    image:
      'http://books.google.com/books/content?id=P7byDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'O Apocalipse De Eve',
    authors: ['Fabio Clauz Morlina'],
    categories: ['Drama'],
    language: 'pt',
    image:
      'http://books.google.com/books/content?id=reH3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Vitka',
    authors: ['Kateřina Tučková'],
    categories: ['Drama'],
    language: 'cs',
    image:
      'http://books.google.com/books/content?id=JLzhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'آیات شیطانی',
    authors: ['سلمان رشدی'],
    categories: ['Adventure'],
    language: 'fa',
    image:
      'http://books.google.com/books/content?id=wv8MEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Shakespeare for Every Day of the Year',
    authors: ['Allie Esiri'],
    categories: ['Classics'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=CbGNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Atrápame (La trilogía Atrápame: primer libro)',
    authors: ['Anna Zaires', 'Dima Zales'],
    categories: ['Fiction'],
    language: 'es',
    image:
      'http://books.google.com/books/content?id=rXqYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Tom Jones',
    authors: ['Ross Ericson'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=FbCXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'AS EXTRAORDINÁRIAS CORES DO AMANHÃ',
    authors: ['Emily X. R. Pan'],
    categories: ['Adventure'],
    language: 'pt',
    image:
      'http://books.google.com/books/content?id=7YB8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Lovely Bones',
    authors: ['Alice Sebold'],
    categories: ['Drama'],
    language: 'en',
    averageRating: 4,
    image:
      'http://books.google.com/books/content?id=int6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Twelfth Night',
    authors: ['William Shakespeare', 'General Press'],
    categories: ['Classics'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=X3xiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'คาถามหารัก',
    authors: ['ริณแก้ว'],
    categories: ['Fiction'],
    language: 'th',
    image:
      'http://books.google.com/books/content?id=q8ZhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Materialities of Greek Tragedy',
    authors: ['Mario Telò', 'Melissa Mueller'],
    categories: ['Adventure'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=6e9ZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Secret Lives of Baba Segi’s Wives',
    authors: ['Lola Shoneyin', 'Rotimi Babatunde'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=3iFfDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Top Girls',
    authors: ['Caryl Churchill'],
    categories: ['Classics'],
    language: 'en',
    averageRating: 4,
    image:
      'http://books.google.com/books/content?id=o8ZIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Bodas de sangre',
    authors: ['Federico García Lorca'],
    categories: ['Drama'],
    language: 'es',
    averageRating: 5,
    image:
      'http://books.google.com/books/content?id=MFI8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Complete Works: Poetry, Plays, Letters, Biographies',
    authors: ['Robert Browning'],
    categories: ['Classics'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=9VRjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Sweat (TCG Edition)',
    authors: ['Lynn Nottage'],
    categories: ['Drama'],
    language: 'en',
    averageRating: 4,
    image:
      'http://books.google.com/books/content?id=7mBhDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Room',
    authors: ['Emma Donoghue'],
    categories: ['Drama'],
    language: 'en',
    averageRating: 4,
    image:
      'http://books.google.com/books/content?id=3TY2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Der Nazi und das kleine Mädchen',
    authors: ['S.T. Afoer '],
    categories: ['Drama'],
    language: 'de',
    image:
      'http://books.google.com/books/content?id=tbcJDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'عطيل',
    authors: ['ويليام شكسبير'],
    categories: ['Drama'],
    language: 'ar',
    image:
      'http://books.google.com/books/content?id=c6c8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Мещанин во дворянстве',
    authors: ['Жан-Батист Мольер'],
    categories: ['Drama'],
    language: 'ru',
    image:
      'http://books.google.com/books/content?id=KsEoAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Dial L for Latch-Key',
    authors: ['Scott Fivelson'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=dWIeDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Greek Tragedies as Plays for Performance',
    authors: ['David Raeburn'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=hARHDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Frankenstein',
    authors: ['Mary Shelley'],
    categories: ['Adventure'],
    language: 'de',
    image:
      'http://books.google.com/books/content?id=thJdCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Oxford Handbook of Shakespeare and Embodiment',
    authors: ['Valerie Traub'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=ZVa1DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Dog in The Manger',
    authors: ['Lope de la Vega'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=_zI2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Tartuffe',
    authors: ['Jean-Baptiste Poquelin Molière', 'Ranjit Bolt'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=5TM2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Medea',
    authors: ['Rachel Cusk'],
    categories: ['Classics'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=uzU2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Tipping the Velvet',
    authors: ['Sarah Waters', 'Laura Wade'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=KzY2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Taming of the Shrew',
    authors: ['William Shakespeare'],
    categories: ['Classics'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=Ac-LCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Pericles, Prince of Tyre',
    authors: ['William Shakespeare'],
    categories: ['Adventure'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=51NBCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'When You Are Old',
    authors: ['William Butler Yeats'],
    categories: ['Classics'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=GcfsBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Broken Glass',
    authors: ['Arthur Miller'],
    categories: ['Drama'],
    language: 'en',
    image:
      'http://books.google.com/books/content?id=iURuBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
];

let filteredBooks;
let container = document.createElement('div');
let fragment;
let categories;
let languages;

window.renderApp = renderApp;
renderApp();

function renderApp() {
  document.getElementById('app-root').innerHTML = ` ${App()} `;
}

function App() {
  return `<div class="mainContent">
           <nav class="navigation">
              <div class="logoWrapper">
               <h1 class="mainHeader">Grab Your Book</h1>
              </div>
          <ul class="navList">
          <li>
            <input
              type="search"
              onfocus="this.value=''"
              required
              placeholder="Type title or author"
              class="searchWord"/>
          </li>  
          </ul>
             </div>
        </nav>
      </div>`;
}

showBooks(theBooks);

function createContainer() {
  container.setAttribute('class', 'container');
  container.innerHTML = '';
  fragment = document.createDocumentFragment();
  const mainContent = document.querySelector('.mainContent');
  mainContent.appendChild(container);
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
  //console.log(theBooks);
}

//showBooks(theBooks);
function getValues(arr, valueName) {
  let valueArray = [];

  arr.forEach(el => {
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
  //console.log(valueArray);
}

const valueNames = [
  { categories: getValues(theBooks, 'categories') },
  { languages: getValues(theBooks, 'language') },
];

/* 
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
}*/

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
  doSearch(theBooks);
  showBooks(filteredBooks);
}

searchWord.addEventListener('keyup', showFoundBooks);
