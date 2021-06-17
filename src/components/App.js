import React, { useState } from 'react';
import BookChoosing from './BookChoosing';
import CategorySelection from './CategorySelection';
import LanguageSelection from './LanguageSelection';
import Randomiser from './Randomiser';
import ShowBooks from './ShowBooks';
import AllBooks from './AllBooks';
import Checkbox from './Checkbox/Checkbox';

export default function App() {
  let [filter, setFilter] = useState('');

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <nav className={styles.navigation}>
            <div className={styles.logoWrapper}>
              <h1 className="mainHeader">Grab Your Book</h1>
            </div>
            <div className={styles.ulWrapper}>
              <ul className={styles.navList}>
                <BookChoosing filter={filter} setFilter={setFilter} />
                <CategorySelection name="categories" filter={filter} setFilter={setFilter} />
                <LanguageSelection name="language" filter={filter} setFilter={setFilter} />
                <Randomiser />
                <AllBooks />
                <Checkbox label="Show books rated" />
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.bookContainer}>
          <ShowBooks />
        </div>
      </div>
    </>
  );
}
