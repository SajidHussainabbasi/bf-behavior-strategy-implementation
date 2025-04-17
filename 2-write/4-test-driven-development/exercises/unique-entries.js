/**
 * Finds all the unique numbers in an array and sorts them.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [nums=[]] - The numbers to check.
 * @param {boolean} [up=true] - Wether to sort the entries up or down.
 * @returns {number[]} The unique entries, in order.
 *
 * @example
 *
 * uniqueEntries([3, 1, 3, 2]); // [1, 2, 3]
 *
 * @example
 *
 * uniqueEntries([3, 1, 3, 2], true); // [1, 2, 3]
 *
 * @example
 *
 * uniqueEntries([3, 1, 3, 2], false); // [3, 2, 1]
 */
export const uniqueEntries = (nums = [], up = true) => {
  const uniqueNumbers = [...new Set(nums)]; // Remove duplicates
  return uniqueNumbers.sort(up ? (a, b) => a - b : (a, b) => b - a); // Sort either ascending or descending
};

console.log(uniqueEntries([3, 1, 3, 2])); // [1, 2, 3]

console.log(uniqueEntries([3, 1, 3, 2], true)); // [1, 2, 3]

console.log(uniqueEntries([3, 1, 3, 2], false)); // [3, 2, 1]
