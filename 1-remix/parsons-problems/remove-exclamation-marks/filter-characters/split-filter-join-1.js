/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */
/**
 * Removes all exclamation marks from the given string.
 *
 * This function takes a string `s`, splits it into an array of characters,
 * filters out all exclamation marks, and returns the resulting string without any `!` characters.
 *
 * @param {string} s - The input string from which exclamation marks should be removed.
 * @returns {string} A new string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("Hello! World!") // Returns: "Hello World"
 */
/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  var arr = s.split('');
  arr = arr.filter(function (e) {
    return e !== '!';
  });
  return arr.join('');
}

//arr.filter(function (e) { // distractor
//var arr = s.join(''); // distractor
//return arr.split(''); // distractorµ

describe('removeExclamationMarks', () => {
  test('removes single exclamation mark', () => {
    expect(removeExclamationMarks('Hello!')).toBe('Hello');
  });

  test('removes multiple exclamation marks', () => {
    expect(removeExclamationMarks('!Hi! Hello!!')).toBe('Hi Hello');
  });

  test('returns string unchanged if no exclamation marks', () => {
    expect(removeExclamationMarks('Hello world')).toBe('Hello world');
  });

  test('returns empty string if only exclamation marks', () => {
    expect(removeExclamationMarks('!!!')).toBe('');
  });

  test('handles mixed characters and exclamations', () => {
    expect(removeExclamationMarks('!A!B!C!')).toBe('ABC');
  });

  test('handles empty string', () => {
    expect(removeExclamationMarks('')).toBe('');
  });
});
