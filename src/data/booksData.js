import dataStore from '../data/dataStore';

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
