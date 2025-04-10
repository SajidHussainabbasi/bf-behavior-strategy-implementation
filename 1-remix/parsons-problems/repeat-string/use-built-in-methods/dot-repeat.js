/* 4 extra lines */

/* parsons-collapse: use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/

/**
 * Repeats the given string a specified number of times using the built-in String.prototype.repeat method.
 *
 * @param {string} [text=''] - The string to repeat.
 * @param {number} [repetitions=1] - The number of times to repeat the string.
 * @returns {string} A new string containing the repeated text.
 *
 * @throws {RangeError} If repetitions is negative or infinite.
 *
 * @example
 * repeatString('hi', 3); // returns 'hihihi'
 * repeatString('x', 0);  // returns ''
 */

const repeatString = (text = '', repetitions = 1) => {
  return text.repeat(repetitions);
};

//return repetitions.repeat(text); // distractor
//return repeat(text, repetitions); // distractor
//return repeat(repetitions, text); // distractor
//const repeatString = (text: '', repetitions: 1) => { // distractor

describe('repeatString', () => {
  it('should repeat the string "hi" 3 times', () => {
    expect(repeatString('hi', 3)).toBe('hihihi');
  });

  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('test', 0)).toBe('');
  });
});