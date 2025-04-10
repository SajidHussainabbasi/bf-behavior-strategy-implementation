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
 * @function
 * @param {string} [text=''] - The string to repeat.
 * @param {number} [repetitions=1] - Number of times to repeat the string.
 * @param {string} [repeated=''] - Used internally to accumulate the result.
 * @returns {string} The final repeated string.
 *
 * @example
 * repeatString('hi', 3); // returns 'hihihi'
 */

const repeatString = (text = '', repetitions = 1, repeated = '') => {
  if (repetitions === 0) {
    return repeated;
  } else {
    const nextRepeated = repeated + text;
    const nextRepetitions = repetitions - 1;
    return repeatString(text, nextRepetitions, nextRepeated);
  }
};

//return ''; // distractor
//return repeatString(text, nextRepetitions); // distractor
describe('repeatString', () => {
  it('should repeat a string 3 times', () => {
    expect(repeatString('hi', 3)).toBe('hihihi');
  });

  it('should return an empty string if repetitions is 0', () => {
    expect(repeatString('test', 0)).toBe('');
  });

  it('should use default values if no arguments are passed', () => {
    expect(repeatString()).toBe('');
  });
});
