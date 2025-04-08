/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60cab9c989d309000170ac65 */

/**
 * Adds corresponding elements of two arrays and returns a new array with the sums.
 * 
 * @param {number[]} array1 - The first array of numbers.
 * @param {number[]} array2 - The second array of numbers. Must be the same length as `array1`.
 * @returns {number[]} A new array containing the element-wise sums of `array1` and `array2`.
 * @throws {Error} Throws an error with the message 'Array lengths not same size' if the input arrays are not the same length.
 * 
 * @example
 * addArrays([8, 9, 10], [6, 7, 8]);
 * // Returns: [14, 16, 18]
 *
 * @example
 * addArrays([1, 2], [3, 4]);
 * // Returns: [4, 6]
 */
/* this exercise has 0 distractors */

function addArrays(array1, array2) {
    if (array1.length !== array2.length) {
        throw new Error('Array lengths not same size');
    }

    return array1.reduce((arr, num, i) => {
        arr.push(num + array2[i]);

        return arr;
    }, []);
}
console.log(addArrays([8,9,10],[6,7,8]));