/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import dataStore from '../data/dataStore';

export default function ShowBooks() {
  if (dataStore.isNotFiltered) {
    dataStore.books = dataStore.theBooksInfo;
  } else {
    dataStore.books = dataStore.filteredBooks;
  }
  let content = [];
  dataStore.books.forEach(el => {
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
        </div>

        <div class={styles.aboutBook}>
          <h4>Description</h4>
          <br></br>
          {el['description'] === undefined ? 'You should read to find out' : el['description']}
        </div>
      </div>,
    );
  });
  return content ? content : 'No books found';
}