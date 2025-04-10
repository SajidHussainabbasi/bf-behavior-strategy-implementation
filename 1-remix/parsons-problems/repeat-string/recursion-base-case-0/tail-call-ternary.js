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

// prettier-ignore
/**
 * Recursively repeats a given string a specified number of times.
 *
 * @param {string} [text=''] - The string to be repeated.
 * @param {number} [repetitions=1] - The number of times to repeat the string.
 * @param {string} [repeated=''] - The accumulator for recursion (used internally).
 * @returns {string} The final repeated string.
 *
 * @example
 * repeatString('hi', 3); // returns 'hihihi'
 * repeatString('a', 0);  // returns ''
 */
const repeatString = (text = '', repetitions = 1, repeated = '') =>
  repetitions === 0 ? repeated: repeatString(text, repetitions - 1, repeated + text);

//? '' // distractor
//: repeatString(text, repetitions - 1); // distractor
describe('repeatString', () => {
  it('should repeat the string 3 times', () => {
    expect(repeatString('hi', 3)).toBe('hihihi');
  });

  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('test', 0)).toBe('');
  });
});
