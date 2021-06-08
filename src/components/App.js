/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement, createFragment } from '../framework/element';
import BookChoosing from './BookChoosing';
import CategorySelection from './CategorySelection';
import LanguageSelection from './LanguageSelection';
import Randomiser from './Randomiser';
import ShowBooks from './ShowBooks';
import AllBooks from './AllBooks';
import Checkbox from './Checkbox/Checkbox';

export default function App() {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.navWrapper}>
          <nav class={styles.navigation}>
            <div class={styles.logoWrapper}>
              <h1 class="mainHeader">Grab Your Book</h1>
            </div>
            <div class={styles.ulWrapper}>
              <ul class={styles.navList}>
                <BookChoosing />
                <CategorySelection />
                <LanguageSelection />
                <Randomiser />
                <AllBooks />
                <Checkbox label="Show books rated" />
              </ul>
            </div>
          </nav>
        </div>
        <div class={styles.bookContainer}>
          <ShowBooks />
        </div>
      </div>
    </>
  );
}
