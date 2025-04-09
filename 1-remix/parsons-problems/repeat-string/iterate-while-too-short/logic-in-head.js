/* 3 extra lines */

/* parsons-collapse: iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/
/**
 * Repeats the given string a specified number of times.
 *
 * @param {string} [text=''] - The string to repeat.
 * @param {number} [repetitions=1] - The number of times to repeat the string.
 * @returns {string} A new string containing the original string repeated.
 *
 * @example
 * repeatString('abc', 3); // returns 'abcabcabc'
 * repeatString('x', 0);   // returns ''
 * repeatString();         // returns ''
 */

const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (repeatedText.length < finalLength) {
    repeatedText += text;
  }
  return repeatedText;
};

//while (repeatedText.length <= finalLength) { // distractor
//repeatedText + text; // distractor
//const repeatedText = ''; // distractor
describe('repeatString', () => {
  it('should repeat a string 3 times', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  it('should return an empty string if repetitions is 0', () => {
    expect(repeatString('hello', 0)).toBe('');
  });

  it('should use default values when no arguments are passed', () => {
    expect(repeatString()).toBe('');
  });
});
