import React from 'react';
import { getRandomBooks } from '../data/grabYourBookAPI';
import { randomWord } from '../data/booksData';

export default function Randomiser() {
  return (
    <p>
      Wondering what to read?{' '}
      <button className={styles.btn} type="button" onClick={e => getRandomBooks(randomWord())}>
        Get advise
      </button>
    </p>
  );
}
