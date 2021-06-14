/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import ShowBooksWithRating from '../ShowBooksWithRating';
import styles from './Checkbox.css';
import { useState, useEffect } from '../../framework/hooks';

export default function Checkbox({ label = '', onChange = null }) {
  const [checked, setChecked] = useState(false);
  function handler() {
    setChecked(!checked).then(ShowBooksWithRating());
  }

  return (
    <label className={[styles.check, styles.option]}>
      <input
        className={styles.check__input}
        type="checkbox"
        onChange={() => handler}
        checked={checked}
      />
      <span className={styles.check__box}></span>
      {label}
    </label>
  );
}
