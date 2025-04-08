/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */
/**
 * Adds corresponding elements of two arrays and returns a new array with the sums.
 *
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers. Must be the same length as `arr1`.
 * @returns {number[]} A new array containing the element-wise sums of `arr1` and `arr2`.
 * @throws {Error} Throws an error if the input arrays are not the same length.
 *
 * @example
 * addArrays([1, 2, 3], [4, 5, 6]);
 * // Returns: [5, 7, 9]
 *
 * @example
 * addArrays([1, 2], [1, 1]);
 * // Returns: [2, 3]
 */
const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) throw new Error('Arrays must be of the same length');
    return arr1.map((_, i) => arr1[i] + arr2[i]);
};
addArrays([1, 2, 3], [4, 5, 6]); 
//addArrays([1, 2], [1]); 
