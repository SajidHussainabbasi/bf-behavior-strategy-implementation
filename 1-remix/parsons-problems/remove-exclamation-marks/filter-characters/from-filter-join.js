/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */
/**
 * Removes all exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks should be removed.
 * @returns {string} A new string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("He!llo!");
 * // Returns: "Hello"
 */
/* this exercise has 2 distractors */

function removeExclamationMarks(s) {
  const result = Array.from(s).filter((element) => {
    return element !== '!';
  });
  return result.join('');
}

//element !== '!'; // distractor
//const result = s.filter((element) => { // distractor
export default removeExclamationMarks;