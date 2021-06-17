import React from 'react';
import getValues from './createOptions';
import filterBooks from './FilterBooks';

export default function LanguageSelection(props) {
  return (
    <li>
      <label htmlFor={props.name}>Select language:</label>
      <select
        defaultValue={''}
        name={props.name}
        id={props.name}
        className={props.name}
        onChange={e => filterBooks(e.target.value, props)}
      >
        <option value="" disabled>
          Language
        </option>
        {getValues(`${props.name}`)}
      </select>
    </li>
  );
}
