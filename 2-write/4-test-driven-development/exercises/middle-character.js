/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */

export const middleCharacter = (text = '') => {
  const len = text.length;
  const mid = Math.floor(len / 2);

  if (len === 0) return '';
  return len % 2 === 0
    ? text.slice(mid - 1, mid + 1) // even length: return 2 middle characters
    : text.charAt(mid); // odd length: return the middle character
};

console.log('abc the middle charatcter :', middleCharacter('abc')); // 'b'
console.log('abcd :', middleCharacter('abcd')); // 'bc'
console.log('a: ', middleCharacter('a')); // 'a'
console.log(':', middleCharacter('')); // ''
console.log('middle :', middleCharacter('middle')); // 'dd'
console.log('hello : ', middleCharacter('hello')); // 'l'
