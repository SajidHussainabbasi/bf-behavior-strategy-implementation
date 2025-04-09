/* 4 extra lines */

/* parsons-collapse: iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create and initialize a stepper variable
    3. iterate repetitions number of times
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
    return: the new repeated string

*/
/**
 * Repeats the given string a specified number of times.
 *
 * @param {string} [text=''] - The string to repeat. Defaults to an empty string if not provided.
 * @param {number} [repetitions=1] - The number of times to repeat the string. Defaults to 1.
 * @returns {string} The repeated string.
 *
 * @example
 * repeatString('abc', 3); // returns 'abcabcabc'
 * repeatString('hello', 0); // returns ''
 * repeatString('', 5); // returns ''
 */
const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  let count = 0;
  while (count < repetitions) {
    repeatedText = repeatedText + text;
    count++;
  }
  return repeatedText;
};

//count+; // distractor
//const count = 0; // distractor
//const repeatedText = ''; // distractor
//const repeatString = (text: '', repetitions: 1) => { // distractor
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
