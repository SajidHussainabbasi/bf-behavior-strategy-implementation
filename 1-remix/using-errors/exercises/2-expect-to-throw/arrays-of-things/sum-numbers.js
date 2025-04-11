import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * Sums up all the numbers in the given array.
 *
 * @param {*} numbers
 * @returns {number}
 */
export const sumNumbers = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('Input must be an array of valid numbers');
  }

  return numbers.reduce((acc, num) => acc + num, 0);
};
