/** @jsx createElement */
/** @jsxFrag createFragment */

import { createElement } from '../framework/element';
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
