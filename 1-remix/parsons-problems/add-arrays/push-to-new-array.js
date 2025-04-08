/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5868e2f683b26841a1000444 */
/**
 * Adds corresponding elements of two arrays and returns a new array with the sums.
 * 
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers. Must be the same length as `arr1`.
 * @returns {number[]} A new array containing the element-wise sums of `arr1` and `arr2`.
 * @throws {Error} Throws an error with the message "You done goof'd" if the input arrays are not the same length.
 * 
 * @example
 * addArrays([20, 30, 40], [9, 8, 7]);
 * // Returns: [29, 38, 47]
 *
 * @example
 * addArrays([1, 2], [3, 4]);
 * // Returns: [4, 6]
 */
/* this exercise has 0 distractors */

function addArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        throw new Error("You done goof'd");
    }
    var sum = [];
    for (var i = 0; i < arr1.length; i++) {
        sum.push(arr1[i] + arr2[i]);
    }
    return sum;
}
console.log(addArrays([20,30,40], [9,8,7]));