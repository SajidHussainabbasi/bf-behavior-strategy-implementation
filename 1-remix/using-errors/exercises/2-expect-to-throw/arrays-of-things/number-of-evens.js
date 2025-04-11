import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * Counts how many even numbers are in the given array
 *
 * @param {*} numbers
 * @returns {number}
 */
export const numberOfEvens = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('Input must be an array of valid numbers');
  }

  return numbers.filter((num) => num % 2 === 0).length;
};
