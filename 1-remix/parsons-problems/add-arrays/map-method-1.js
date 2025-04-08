/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */
/**
 * Adds corresponding elements of two arrays and returns a new array with the sums.
 *
 * @param {number[]} a1 - The first array of numbers.
 * @param {number[]} a2 - The second array of numbers. Must be the same length as `a1`.
 * @returns {number[]} A new array containing the element-wise sums of `a1` and `a2`.
 * @throws {Error} Throws an error if the input arrays are not the same length.
 *
 * @example
 * addArrays([1, 2, 3], [4, 5, 6]);
 * // Returns: [5, 7, 9]
 */
function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((v, i) => v + a2[i]);
}
console.log(addArrays([1, 2, 3], [4, 5, 6]));
