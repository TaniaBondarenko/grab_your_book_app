/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { showAllBooks } from '../data/grabYourBookAPI';

export default function AllBooks() {
  return (
    <li>
      <button class={styles.btn} type="button" onclick={e => showAllBooks()}>
        Show all
      </button>
    </li>
  );
}
