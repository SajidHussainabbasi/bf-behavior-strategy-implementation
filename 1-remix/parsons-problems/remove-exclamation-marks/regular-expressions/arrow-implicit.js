/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f9488b2faf02e74c000536 */

/* this exercise has 3 distractors */
/**
 * Removes all exclamation marks from a given string using a regular expression.
 *
 * @param {string} s - The input string possibly containing exclamation marks.
 * @returns {string} A new string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("Hello! World!") // returns "Hello World"
 * removeExclamationMarks("No exclamations") // returns "No exclamations"
 */

let removeExclamationMarks = (s) => s.replace(/!/g, '');

//let removeExclamationMarks = function(s) { s.replace(/!/g, ''); } // distractor
//let removeExclamationMarks = (s) => { s.replace(/!/g, ''); } // distractor
//let removeExclamationMarks => (s) = s.replace(/!/g, ''); // distractor
console.log(removeExclamationMarks('Helo!world'));

describe('removeExclamationMarks', () => {
  test('removes all exclamation marks from a sentence', () => {
    expect(removeExclamationMarks('Hello! World!')).toBe('Hello World');
  });

  test('returns the same string if there are no exclamation marks', () => {
    expect(removeExclamationMarks('Calm and quiet')).toBe('Calm and quiet');
  });
});
