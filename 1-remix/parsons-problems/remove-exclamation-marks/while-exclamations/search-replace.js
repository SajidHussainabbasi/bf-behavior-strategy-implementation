/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5e5ed30f4013f00001a33813 */

/* this exercise has 2 distractors */
/**
 * Removes all exclamation marks from the given string.
 *
 * @param {string} s - The input string potentially containing exclamation marks.
 * @returns {string} The string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("Hello! World!!"); // returns "Hello World"
 */
function removeExclamationMarks(s) {
  while (s.search('!') >= 0) {
    s = s.replace('!', '');
  }
  return s;
}

//s = s.replace('', '!'); // distractor
//while (s.search('!') > 0) { // distractor
//while (s.search('!') !== 0) { // distractor
describe('removeExclamationMarks', () => {
  it('should remove all exclamation marks from a string with multiple exclamations', () => {
    expect(removeExclamationMarks('Hello! World!!')).toBe('Hello World');
  });

  it('should return the same string if there are no exclamation marks', () => {
    expect(removeExclamationMarks('No excitement here')).toBe(
      'No excitement here',
    );
  });
});
