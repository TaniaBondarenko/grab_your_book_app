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
  return words[Math.floor(Math.random() * words.length)];
};
