/**
 * Reverses each word in a string.
 *
 * @param {string} [text=''] - The string of words to reverse.
 * @returns {string} The text, with each word reversed.
 *
 * @example
 *
 * reverseWords('hello'); // 'olleh'
 *
 * @example
 *
 * reverseWords('hello world!'); // 'olleh dlrow!'
 */
export const reverseWords = (text = '') => {
  const words = text.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let reversedWord = '';

    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }

    result += reversedWord;
    if (i < words.length - 1) result += ' ';
  }

  return result;
};

console.log('hello',reverseWords('hello')); // 'olleh'
console.log('hello world!',reverseWords('hello world!')); // 'olleh dlrow!'
