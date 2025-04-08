/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */
/**
 * Removes all exclamation marks from the given string.
 *
 * @param {string} s - The input string potentially containing exclamation marks.
 * @returns {string} A new string with all exclamation marks removed.
 *
 * @example
 * removeExclamationMarks("Hello!");
 * // Returns: "Hello"
 *
 * @example
 * removeExclamationMarks("!Hi!!");
 * // Returns: "Hi"
 */
/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  var newString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '!') {
      newString += s[i];
    }
  }
  return newString;
}

//newString = s[i]; // distractor
//return s; // distractor
//if (s[i] == '!') { // distractor

// Unit tests
console.assert(removeExclamationMarks("Hello!") === "Hello", 'Test 1 Failed');
console.assert(removeExclamationMarks("!Hi!!") === "Hi", 'Test 2 Failed');
console.assert(removeExclamationMarks("No exclamations here") === "No exclamations here", 'Test 3 Failed');
console.assert(removeExclamationMarks("!!!") === "", 'Test 4 Failed');
console.assert(removeExclamationMarks("Look! Over! There!") === "Look Over There", 'Test 5 Failed');

console.log("All tests passed!");