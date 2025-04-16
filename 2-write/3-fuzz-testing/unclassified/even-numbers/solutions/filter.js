/**
 * Filters out all the odd numbers from an array, returning only even numbers.
 *
 * This function takes an array of numbers and returns a new array containing only the even numbers.
 * Odd numbers are excluded from the returned array.
 *
 * @function
 * @param {number[]} arr - An array of numbers to be filtered.
 * @returns {number[]} A new array containing only the even numbers from the input array.
 *
 * @example
 * filter([1, 2, 3, 4, 5]);
 * // returns [2, 4]
 *
 * @example
 * filter([2, 4, 6, 8]);
 * // returns [2, 4, 6, 8]
 *
 * @example
 * filter([1, 3, 5, 7]);
 * // returns []
 */
export const filter = (arr) => arr.filter((num) => num % 2 === 0);

//.....Tests.....

describe('filter - filters out odd numbers', () => {
  it('returns only even numbers from the array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = [2, 4];
    expect(filter(input)).toEqual(output);
  });

  it('returns an empty array when all numbers are odd', () => {
    const input = [1, 3, 5, 7];
    const output = [];
    expect(filter(input)).toEqual(output);
  });

  it('returns the same array if all numbers are even', () => {
    const input = [2, 4, 6, 8];
    const output = [2, 4, 6, 8];
    expect(filter(input)).toEqual(output);
  });
});
