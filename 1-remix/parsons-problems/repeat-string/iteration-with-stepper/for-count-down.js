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
 * Returns a new string that repeats the given text a specified number of times.
 *
 * @param {string} [text=''] - The string to repeat.
 * @param {number} [repetitions=1] - The number of times to repeat the string. Must be a non-negative integer.
 * @returns {string} The repeated string.
 *
 * @example
 * repeatString('ha', 3); // returns 'hahaha'
 * repeatString('abc', 0); // returns ''
 * repeatString('', 5); // returns ''
 */

const repeatString = (text = '', repetitions = 1) => {
  let repeatedText = '';
  for (let count = repetitions; count > 0; count--) {
    repeatedText += text;
  }
  return repeatedText;
};
console.log('The repeated Sting of x is :  ', repeatString('x', 5));

//for (let count = repetitions; count > 0; count++ { // distractor
//for (let count = repetitions; count === 0; count--) { // distractor
//for (let count = repetitions; count >= 0; count-) { // distractor

describe('repeatString', () => {
  it('should repeat a string 5 times', () => {
    expect(repeatString('x', 5)).toBe('xxxxx');
  });

  it('should return an empty string when the input text is empty', () => {
    expect(repeatString('', 10)).toBe('');
  });

  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('hello', 0)).toBe('');
  });
});
