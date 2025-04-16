/**
 * Removes all odd numbers from the array.
 * Throws an error if the array contains non-numeric values.
 * Does not modify the argument array.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number[]} A new array containing only even numbers.
 * @throws {Error} If any non-numeric value is found in the array.
 */
export const removeOdds = (arr) => {
  // Check if all elements are numbers
  if (!arr.every((item) => typeof item === 'number')) {
    throw new Error('Array contains non-number elements');
  }

  // Filter out odd numbers and return a new array with only even numbers
  return arr.filter((num) => num % 2 === 0);
};

//......Tests......

describe('removeOdds - removes odd numbers and throws error for non-numeric values', () => {
  it('returns a new array containing only even numbers', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = [2, 4, 6];
    expect(removeOdds(input)).toEqual(output);
  });

  it('throws an error when the array contains a non-numeric value', () => {
    const input = [1, 'a', 3, 4];
    expect(() => removeOdds(input)).toThrow(
      'Array contains non-number elements',
    );
  });

  it('does not modify the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const inputCopy = [...input];
    removeOdds(input);
    expect(input).toEqual(inputCopy); // original array should remain unchanged
  });
});
