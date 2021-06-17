import React from 'react';
import SearchBook from '../components/SearchBook';

export default function BookChoosing(props) {
  return (
    <li>
      <input type="search" placeholder="Type title or author" className="searchWord" />
      <button
        className={styles.btn}
        type="button"
        onClick={e => {
          SearchBook(document.querySelector('.searchWord').value, props);
        }}
      >
        Find
      </button>
    </li>
  );
}
