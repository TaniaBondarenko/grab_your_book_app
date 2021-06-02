/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import doSearch from '../components/SearchBook';

export default function BookChoosing() {
  return (
    <li>
      <input type="search" placeholder="Type title or author" class="searchWord" />
      <button
        class={styles.btn}
        type="button"
        onclick={e => {
          doSearch(document.querySelector('.searchWord').value);
        }}
      >
        Find
      </button>
    </li>
  );
}
