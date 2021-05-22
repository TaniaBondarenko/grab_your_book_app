/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function BookChoosing() {
  return (
    <li>
      <input type="search" placeholder="Type title or author" class="searchWord" />
      <button class={styles.btn} type="button" onclick={e => window.doSearch(e.target.value)}>
        Find
      </button>
    </li>
  );
}
