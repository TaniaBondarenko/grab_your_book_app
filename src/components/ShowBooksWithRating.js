import React from 'react';
import dataStore from '../data/dataStore';

export default function ShowBooksWithRating() {
  dataStore.filteredBooks = dataStore.theBooksInfo
    .filter(el => {
      return el.averageRating;
    })
    .sort((a, b) => b.averageRating - a.averageRating);
}

export function getRated(n) {
  let star = '';
  for (let i = 0; i < Math.floor(n); i++) {
    star += '⭐';
  }
  return (
    <>
      <span>{star}</span>
    </>
  );
}
