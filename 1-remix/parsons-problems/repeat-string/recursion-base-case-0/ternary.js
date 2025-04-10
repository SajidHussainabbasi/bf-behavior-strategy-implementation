/* 2 extra lines */

/* parsons-collapse: recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/

/**
 * Recursively repeats a given string a specified number of times.
 *
 * @param {string} [text=''] - The string to be repeated.
 * @param {number} [repetitions=1] - The number of times to repeat the string.
 * @returns {string} The resulting repeated string.
 *
 * @example
 * repeatString('ha', 3); // returns 'hahaha'
 * repeatString('x', 0);  // returns ''
 */
// prettier-ignore
const repeatString = (text = '', repetitions = 1) =>
  repetitions === 0
    ? ''
    : text + repeatString(text, repetitions - 1);

//const repeatString = (text = '', repetitions = 1) => { // distractor
//repetitions = 0 // distractor

describe('repeatString', () => {
  it('should repeat the string 3 times', () => {
    expect(repeatString('ha', 3)).toBe('hahaha');
  });

  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('test', 0)).toBe('');
  });
});
