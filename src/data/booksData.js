/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement, createFragment } from '../framework/element';
import dataStore from '../data/dataStore';

export default function getValues(valueName) {
  let valueArray = [];
  dataStore.theBooksInfo.forEach(el => {
    if (Array.isArray(el[`${valueName}`])) {
      if (!valueArray.includes(el[`${valueName}`].join())) {
        return valueArray.push(el[`${valueName}`].join());
      }
    } else {
      if (!valueArray.includes(el[`${valueName}`])) {
        return valueArray.push(el[`${valueName}`]);
      }
    }
  });
  return valueArray.map(function (el) {
    return <option value={el}>{el}</option>;
  });
}

export const randomWord = function () {
  const words = [
    'flowers',
    'season',
    'heart',
    'love',
    'forest',
    'beauty',
    'good',
    'sun',
    'dog',
    'winter',
    'lake',
    'money',
    'fun',
    'bird',
    'book',
    'king',
    'ring',
  ];
  return (dataStore.random = words[Math.floor(Math.random() * words.length)]);
};
