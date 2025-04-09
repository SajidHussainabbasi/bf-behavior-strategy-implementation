/* 4 extra lines */

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
 * Repeats a given string a specified number of times.
 *
 * @param {string} [text=''] - The string to be repeated.
 * @param {number} [repetitions=1] - The number of times to repeat the string.
 * @returns {string} The concatenated result of the string repeated.
 *
 * @example
 * repeatString('abc', 3); // returns 'abcabcabc'
 */
const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (true) {
    if (repeatedText.length === finalLength) {
      break;
    }
    repeatedText = repeatedText + text;
  }
  return repeatedText;
};
console.log(repeatString('abc', 3)); 
//continue; // distractor
//if (repeatedText.length = finalLength) { // distractor
//while (false) { // distractor
//} // distractor
describe('repeatString', () => {
  it('should repeat the string 3 times', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  it('should return an empty string when input is an empty string', () => {
    expect(repeatString('', 5)).toBe('');
  });

  it('should default to 1 repetition if no repetitions value is passed', () => {
    expect(repeatString('hi')).toBe('hi');
  });
});
