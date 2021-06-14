/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement } from '../framework/element';
import getValues from './createOptions';
import filterBooks from './FilterBooks';

export default function CategorySelection(props) {
  return (
    <li style="width:100%">
      <label For={props.name}>Choose a category:</label>
      <select
        name={props.name}
        id={props.name}
        class={props.name}
        onchange={e => filterBooks(e.target.value)}
      >
        <option value="" selected disabled hidden>
          Category
        </option>
        {getValues(`${props.name}`)}
      </select>
    </li>
  );
}
