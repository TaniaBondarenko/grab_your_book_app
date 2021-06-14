/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement, createFragment } from '../framework/element';
import getValues from './createOptions';
import doFilter from './FilterBooks';

export default function LanguageSelection(props) {
  return (
    <li>
      <label For={props.name}>Select language:</label>
      <select
        name={props.name}
        id={props.name}
        class={props.name}
        onchange={e => doFilter(e.target.value)}
      >
        <option value="" selected disabled hidden>
          Language
        </option>
        {getValues(`${props.name}`)}
      </select>
    </li>
  );
}
