/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda */

/* this exercise has 3 distractors */
/**
 * Removes all exclamation marks from a given string.
 *
 * @param {string} s - The input string potentially containing exclamation marks.
 * @returns {string} A new string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("Hello! World!") // returns "Hello World"
 */
let removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((e) => e != '!')
    .join('');

//.split(''); // distractor
//.filter((e) => e != '!'); // distractor
//.join('') // distractor
describe('removeExclamationMarks', () => {
  test('removes all exclamation marks from a sentence', () => {
    expect(removeExclamationMarks("Hello! World!")).toBe("Hello World");
  });

  test('returns the same string if there are no exclamation marks', () => {
    expect(removeExclamationMarks("No excitement here")).toBe("No excitement here");
  });
});
