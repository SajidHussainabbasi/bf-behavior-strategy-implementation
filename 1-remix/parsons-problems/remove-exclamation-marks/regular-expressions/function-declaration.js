/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

/* this exercise has 3 distractors */
/**
 * Removes all exclamation marks from a given string.
 *
 * @function - Function declaration
 * @param {string} s - The input string possibly containing exclamation marks.
 * @returns {string} The input string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("Hello! World!!"); // Returns "Hello World"
 */
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

//var function removeExclamationMarks(s) { // distractor
//s.replace(/!/gi, ''); // distractor
//function removeExclamationMarks(s) => { // distractor

describe('removeExclamationMarks', () => {
  test('removes single exclamation mark', () => {
    expect(removeExclamationMarks('Hello!')).toBe('Hello');
  });

  test('removes multiple exclamation marks throughout the string', () => {
    expect(removeExclamationMarks('Wow!! Amazing! Really!!')).toBe(
      'Wow Amazing Really',
    );
  });

  test('returns the original string if there are no exclamation marks', () => {
    expect(removeExclamationMarks('Nothing here')).toBe('Nothing here');
  });
});
