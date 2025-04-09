/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c3b87b60eaa400010537e8 */

/* this exercise has 2 distractors */
/**
 * Removes all exclamation marks (!) from a given string.
 *
 * This function iteratively checks for the presence of '!' characters,
 * removes them one by one using string slicing, and returns the cleaned string.
 *
 * @function
 * @param {string} s - The input string which may contain exclamation marks.
 * @returns {string} The input string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("He!llo!"); // Returns "Hello"
 * removeExclamationMarks("No exclamations"); // Returns "No exclamations"
 */

function removeExclamationMarks(s) {
  while (s.includes('!')) {
    let index = s.indexOf('!');
    s = s.slice(0, index).concat(s.slice(index + 1, s.length));
  }

  return s;
}

//s.slice(0, index).concat(s.slice(index + 1, s.length)); // distractor
//let s = s.slice(0, index).concat(s.slice(index + 1, s.length)); // distractor
describe('removeExclamationMarks', () => {
  test('removes a single exclamation mark', () => {
    expect(removeExclamationMarks('Hello!')).toBe('Hello');
  });

  test('removes multiple exclamation marks from different positions', () => {
    expect(removeExclamationMarks('!Hi! This! is! cool!')).toBe(
      'Hi This is cool',
    );
  });

  test('returns the original string if there are no exclamation marks', () => {
    expect(removeExclamationMarks('Completely normal sentence')).toBe(
      'Completely normal sentence',
    );
  });
});
