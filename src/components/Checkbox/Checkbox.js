/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import ShowBooksWithRating from '../ShowBooksWithRating';
import styles from './Checkbox.css';

export default function Checkbox({ label = '', onChange = null }) {
  return (
    <label className={[styles.check, styles.option]}>
      <input
        className={styles.check__input}
        type="checkbox"
        onChange={e => ShowBooksWithRating()}
      />
      <span className={styles.check__box}></span>
      {label}
    </label>
  );
}
