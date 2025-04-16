'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

function removeOddNumbers(arrayOfNumbers) {
  // Check if the input is an array and contains only numbers
  if (!Array.isArray(arrayOfNumbers)) {
    throw new TypeError('arrayOfNumbers is not an array');
  }

  // Check that the array only contains numbers
  const hasNonNumbers = arrayOfNumbers.some((item) => typeof item !== 'number');
  if (hasNonNumbers) {
    throw new TypeError('arrayOfNumbers does not contain only numbers');
  }

  // Return a new array containing only even numbers
  return arrayOfNumbers.filter((num) => num % 2 === 0);
}

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe('secretSolution: filters out only even numbers', () => {
    it('should throw an error if input is not an array', () => {
      expect(() => secretSolution('not an array')).toThrowError(
        'arrayOfNumbers is not an array',
      );
    });

    it('should throw an error if array contains non-numbers', () => {
      expect(() => secretSolution([1, 2, '3', 4])).toThrowError(
        'arrayOfNumbers does not contain only numbers',
      );
    });

    it('should return an empty array when input is an empty array', () => {
      expect(secretSolution([])).toEqual([]);
    });

    it('should return only even numbers from the array', () => {
      expect(secretSolution([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('should return an empty array if there are no even numbers', () => {
      expect(secretSolution([1, 3, 5, 7])).toEqual([]);
    });

    it('should return an array with all even numbers if input contains only even numbers', () => {
      expect(secretSolution([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
