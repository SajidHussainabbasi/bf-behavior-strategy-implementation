/**
 * Counts how many times each character appears in a string.
 *
 * @param {string} [text=''] - The string of characters to count.
 * @returns {number{}} An object of key/value pairs counting each character.
 *
 * @example
 *
 * countCharacters('hi'); // { h: 1, i: 1 }
 *
 * @example
 *
 * countCharacters('hiiii'); // { h: 1, i: 4 }
 *
 */

export const countCharacters = (text = '') => {
  const counts = {};
  for (const char of text) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
};
console.log('hiiii', countCharacters('hiiii'));
console.log('hi', countCharacters('hi'));
console.log('heloo world',countCharacters('heloo world'));