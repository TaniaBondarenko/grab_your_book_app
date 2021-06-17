import React from 'react';
import getTheBooks, { baseURL } from '../data/grabYourBookAPI';

export default function AllBooks() {
  return (
    <li>
      <button className={styles.btn} type="button" onClick={e => getTheBooks(baseURL)}>
        Show all
      </button>
    </li>
  );
}
