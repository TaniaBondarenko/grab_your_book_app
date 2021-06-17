import React from 'react';
import dataStore from '../data/dataStore';
import { getRated } from './ShowBooksWithRating';

export default function ShowBooks() {
  let content = [];
  let books = [];
  if (dataStore.isNotFiltered === true) {
    books = dataStore.theBooksInfo;
  } else {
    books = dataStore.filteredBooks;
  }
  books.forEach(el => {
    content.push(
      <>
        <div className={styles.bookCard}>
          <div className={styles.mainInfo}>
            <img
              className={styles.bookImg}
              src={
                el['imageLinks'].thumbnail === undefined
                  ? './images/book.png'
                  : el['imageLinks'].thumbnail
              }
            />
            <p className="bookTitle">
              <h3>{el['title']}</h3>
            </p>
            <p className="bookAuthor">{el['authors']}</p>
            <p> {el['averageRating'] ? getRated(el['averageRating']) : ''}</p>
          </div>

          <div className={styles.aboutBook}>
            <h4>Description</h4>
            <br></br>
            {el['description'] === undefined ? 'You should read to find out' : el['description']}
          </div>
        </div>
      </>,
    );
  });

  if (dataStore.isDataLoading === true) {
    content = 'Loading...';
  } else {
    content;
  }
  return content;
}
