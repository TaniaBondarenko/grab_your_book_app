/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement, createFragment } from '../framework/element';
import { getRandomBooks } from '../data/grabYourBookAPI';
import { randomWord } from '../data/booksData';

export default function Randomiser() {
  return (
    <p>
      Wondering what to read?{' '}
      <button class={styles.btn} type="button" onclick={e => getRandomBooks(randomWord())}>
        Get advise
      </button>
    </p>
  );
}
