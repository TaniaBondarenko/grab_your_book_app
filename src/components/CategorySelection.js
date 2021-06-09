/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement } from '../framework/element';
import getValues from './createOptions';
import doFilter from './FilterBooks';

export default function CategorySelection() {
  return (
    <li style="width:100%">
      <label For="categories">Choose a category:</label>
      <select
        name="categories"
        id="categories"
        class="categories"
        onchange={e => doFilter(e.target.value)}
      >
        <option value="" selected disabled hidden>
          Category
        </option>
        {getValues('categories')}
      </select>
    </li>
  );
}
