'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
function convertStringsToNumbers(arrayOfStrings) {
  return arrayOfStrings
    .map((str) => Number(str)) // Convert each string to a number
    .filter((num) => !isNaN(num)); // Filter out NaN values
}
console.log(convertStringsToNumbers(['1', '2', 'e', '.'])); // --> [1, 2]
console.log(convertStringsToNumbers(['3', '4', '5'])); // --> [3, 4, 5]
console.log(convertStringsToNumbers(['hello', '12', '42'])); // --> [12, 42]

describe('convertStringsToNumbers', () => {
  it('should convert an array of valid number strings to numbers', () => {
    const input = ['1', '2', '3.5', '42'];
    const expected = [1, 2, 3.5, 42];
    const result = convertStringsToNumbers(input);
    expect(result).toEqual(expected);
  });

  it('should return an empty array when there are no valid numbers', () => {
    const input = ['e', '.', 'abc'];
    const expected = [];
    const result = convertStringsToNumbers(input);
    expect(result).toEqual(expected);
  });

  it('should return only the valid numbers and filter out invalid ones', () => {
    const input = ['1', '2', 'not a number', '3', 'abc'];
    const expected = [1, 2, 3];
    const result = convertStringsToNumbers(input);
    expect(result).toEqual(expected);
  });
});

describe('secretSolution: converts an array of strings to numbers', () => {
  describe('when the input is valid', () => {
    it('should return an array of numbers from valid number strings', () => {
      const input = ['1', '2', '3.5', '42'];
      const result = secretSolution(input);
      expect(result).toEqual([1, 2, 3.5, 42]);
    });

    it('should return an empty array if no valid numbers are in the input', () => {
      const input = ['a', 'b', 'c'];
      const result = secretSolution(input);
      expect(result).toEqual([]);
    });

    it('should ignore invalid strings and only return valid numbers', () => {
      const input = ['1', 'not a number', '3', 'hello'];
      const result = secretSolution(input);
      expect(result).toEqual([1, 3]);
    });
  });

  describe('when the input is invalid', () => {
    it('should throw a TypeError if the input is not an array', () => {
      const input = '1, 2, 3';
      expect(() => secretSolution(input)).toThrow(
        'arrayOfStrings is not an array',
      );
    });

    it('should throw a TypeError if any element is not a string', () => {
      const input = [1, '2', '3'];
      expect(() => secretSolution(input)).toThrow(
        'arrayOfStrings contains non-strings',
      );
    });
  });
});

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
