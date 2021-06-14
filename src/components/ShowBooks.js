/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import dataStore from '../data/dataStore';
import { getRated } from './ShowBooksWithRating';

export default function ShowBooks() {
  let content = [];
  let books = [];
  if (dataStore.isNotFiltered) {
    books = dataStore.theBooksInfo;
  } else {
    books = dataStore.filteredBooks;
  }
  books.forEach(el => {
    content.push(
      <div class={styles.bookCard}>
        <div class={styles.mainInfo}>
          <img
            class={styles.bookImg}
            src={
              el['imageLinks'].thumbnail === undefined
                ? './images/book.png'
                : el['imageLinks'].thumbnail
            }
          />
          <p class="bookTitle">
            <h3>{el['title']}</h3>
          </p>
          <p class="bookAuthor">{el['authors']}</p>
          <p> {el['averageRating'] ? getRated(el['averageRating']) : ''}</p>
        </div>

        <div class={styles.aboutBook}>
          <h4>Description</h4>
          <br></br>
          {el['description'] === undefined ? 'You should read to find out' : el['description']}
        </div>
      </div>,
    );
  });

  if (dataStore.isDataLoading === true) {
    content = 'Loading...';
  } else {
    content;
  }
  return content;
}
