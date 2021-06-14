/** @jsx createElement */
/** @jsxFrag createFragment */
import getTheBooks, { baseURL } from '../data/grabYourBookAPI';
import { createElement, createFragment } from '../framework/element';

export default function AllBooks() {
  return (
    <li>
      <button class={styles.btn} type="button" onclick={e => getTheBooks(baseURL)}>
        Show all
      </button>
    </li>
  );
}
