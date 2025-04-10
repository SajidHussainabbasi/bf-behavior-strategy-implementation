/* 3 extra lines */

/* parsons-collapse: use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/

/**
 * Repeats the given string a specified number of times.
 *
 * @param {string} [text=''] - The string to repeat.
 * @param {number} [repetitions=1] - The number of times to repeat the string.
 * @returns {string} A new string containing the repeated text.
 *
 * @example
 * repeatString('ab', 3); // returns 'ababab'
 * repeatString('x', 0);  // returns ''
 */

const repeatString = (text = '', repetitions = 1) => {
  const oneEntryPerRepetition = Array(repetitions).fill(text);
  const repeatedString = oneEntryPerRepetition.join('');
  return repeatedString;
};

//return Array(repetitions).fill(text); // distractor
//const repeatedString = Array(repetitions).fill(text); // distractor
//const oneEntryPerRepetition = repeatedString.join(''); // distractor

describe('repeatString', () => {
  it('should repeat the string "ab" 3 times', () => {
    expect(repeatString('ab', 3)).toBe('ababab');
  });

  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('test', 0)).toBe('');
  });
});
