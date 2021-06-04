/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement, createFragment } from '../framework/element';
import getValues from '../data/booksData';
import doFilter from './FilterBooks';
import ShowBooks from './ShowBooks';

export default function LanguageSelection() {
  return (
    <li>
      <label For="language">Select language:</label>
      <select
        name="language"
        id="language"
        class="language"
        onchange={e => ShowBooks(doFilter(e.target.value))}
      >
        <option value="" selected disabled hidden>
          Language
        </option>
        {getValues('language')}
      </select>
    </li>
  );
}