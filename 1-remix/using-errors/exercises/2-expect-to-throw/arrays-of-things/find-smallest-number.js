import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns {number | undefined}
 */
export const findSmallestNumber = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    return undefined;
  }

  return Math.min(...numbers);
};
