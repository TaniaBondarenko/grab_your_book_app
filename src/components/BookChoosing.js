/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';
import SearchBook from '../components/SearchBook';

export default function BookChoosing() {
  return (
    <li>
      <input type="search" placeholder="Type title or author" class="searchWord" />
      <button
        class={styles.btn}
        type="button"
        onclick={e => {
          SearchBook(document.querySelector('.searchWord').value);
        }}
      >
        Find
      </button>
    </li>
  );
}
