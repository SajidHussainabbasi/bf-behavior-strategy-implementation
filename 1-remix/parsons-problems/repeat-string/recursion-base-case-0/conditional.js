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
 * Recursively repeats the given string a specified number of times.
 *
 * @param {string} [text=''] - The string to repeat. Defaults to an empty string if not provided.
 * @param {number} [repetitions=1] - The number of times to repeat the string. Defaults to 1.
 * @returns {string} The string repeated the specified number of times.
 *
 * @example
 * repeatString('abc', 3); // returns 'abcabcabc'
 * repeatString('hello', 0); // returns ''
 * repeatString('', 5); // returns ''
 */

const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return '';
  } else {
    const nextRepetitions = repetitions - 1;
    const oneRepetitionShort = repeatString(text, nextRepetitions);
    return text + oneRepetitionShort;
  }
};

//return oneRepetitionShort + text; // distractor
//if (repetitions !== 0) { // distractor

describe('repeatString', () => {
  it('should repeat the string 3 times', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('hello', 0)).toBe('');
  });

  it('should return the string itself when repetitions is 1', () => {
    expect(repeatString('hello', 1)).toBe('hello');
  });
});
