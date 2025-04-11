// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns {number|null} The greatest number in the array, or null if input is invalid.
 */
export const findGreatestNumber = (numbers = []) => {
  if (!isArrayOfNumbers(numbers) || numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
};
