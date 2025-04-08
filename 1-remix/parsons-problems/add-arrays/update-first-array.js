/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */
/**
 * Adds corresponding elements of two arrays and modifies the first array in place.
 * 
 * This function checks if the two input arrays are of the same length. If they are,
 * it adds each element of the second array to the corresponding element of the first array.
 * The modified first array is returned.
 * 
 * @param {number[]} array1 - The first array of numbers that will be modified.
 * @param {number[]} array2 - The second array of numbers. Must be the same length as `array1`.
 * @returns {number[]} The modified `array1` with element-wise sums of `array1` and `array2`.
 * @throws {Error} Throws an error if the input arrays are not the same length.
 * 
 * @example
 * addArrays([20, 30, 40], [40, 50, 60]);
 * // Returns: [60, 80, 100]
 * 
 * @example
 * addArrays([1, 2], [3, 4]);
 * // Returns: [4, 6]
 */
/* this exercise has 0 distractors */

function addArrays(array1, array2) {
    var len = array1.length;

    if (len === array2.length) {
        for (var i = 0; i < len; i++) {
            array1[i] += array2[i];
        }

        return array1;
    }

    throw new Error();
}
console.log(addArrays([20,30,40],[40,50,60]));