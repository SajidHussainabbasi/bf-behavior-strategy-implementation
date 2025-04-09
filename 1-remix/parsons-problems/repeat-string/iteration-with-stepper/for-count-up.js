/* 3 extra lines */

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
 * @returns {string} A string with the original string repeated the specified number of times.
 *
 * @example
 * repeatString('abc', 3); // returns 'abcabcabc'
 * repeatString('hello', 2); // returns 'hellohello'
 * repeatString('', 4); // returns ''
 */

const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  for (let count = 0; count < repetitions; count++) {
    repeatedText += text;
  }
  return repeatedText;
};
console.log('The repeated string is : ', repeatString('hello', 2));
//for (let count = 0; count <= repetitions; count++) { // distractor
//for (let count = 0; count !>= repetitions; count++) { // distractor
//for (const count = 0; count < repetitions; count++) { // distractor
describe('repeatString', () => {
  it('should repeat the string 3 times', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  it('should return an empty string when the input text is empty', () => {
    expect(repeatString('', 5)).toBe('');
  });

  it('should return the string itself if repetitions is 1', () => {
    expect(repeatString('hello', 1)).toBe('hello');
  });
});
