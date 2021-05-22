/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function AllBooks() {
  return (
    <li>
      <button class={styles.btn} type="button" onclick={e => window.showAllBooks()}>
        Show all
      </button>
    </li>
  );
}
