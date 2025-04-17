/**
 * Determines if each number in an array is even or odd.
 *   This is a pure function with no side-effects.
 *
 * @param {number[]} [nums=[]] - An array of numbers.
 * @returns {string[]} - An array with the same number of entries as nums.
 *    Each number has been replaced with "even" or "odd".
 *
 * @example
 *evenOrOdd([1, 2, 3, 4]); // ['odd', 'even', 'odd', 'even']
 *evenOrOdd([]);           // []
 *evenOrOdd([0, -1, -2]);  // ['even', 'odd', 'even']
 * evenOrOdd([1, 2]); // ['odd', 'even']
 */

export const evenOrOdd = (nums = []) => {
  return nums.map((num) => (num % 2 === 0 ? 'even' : 'odd'));
};

console.log(evenOrOdd([1, 2, 3, 4])); // ['odd', 'even', 'odd', 'even']
console.log(evenOrOdd([])); // []
console.log(evenOrOdd([0, -1, -2])); // ['even', 'odd', 'even']
console.log(evenOrOdd([1, 2])); // ['odd', 'even']
