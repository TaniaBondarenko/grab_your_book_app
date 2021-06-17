import React from 'react';
import getValues from './createOptions';
import filterBooks from './FilterBooks';

export default function CategorySelection(props) {
  return (
    <li>
      <label htmlFor={props.name}>Choose a category:</label>
      <select
        defaultValue={''}
        name={props.name}
        id={props.name}
        className={props.name}
        onChange={e => filterBooks(e.target.value, props)}
      >
        <option value="" disabled>
          Category
        </option>
        {getValues(`${props.name}`)}
      </select>
    </li>
  );
}
