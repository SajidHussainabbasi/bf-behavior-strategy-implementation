'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

describe('secretSolution: handles array of strings', () => {
  describe('input validation', () => {
    it('throws an error if the input is not an array', () => {
      expect(() => secretSolution('not an array')).toThrowError(
        'arrayOfStrings is not an array',
      );
    });

    it('throws an error if the array contains non-string values', () => {
      expect(() => secretSolution([1, 2, 3])).toThrowError(
        'arrayOfStrings does not contain only strings',
      );
      expect(() => secretSolution([1, 'hello', 'world'])).toThrowError(
        'arrayOfStrings does not contain only strings',
      );
    });
  });

  describe('normal cases', () => {
    it('should return an empty string for an empty array', () => {
      expect(secretSolution([])).toEqual('');
    });

    it('should concatenate strings in reverse order', () => {
      const input = ['hello', 'world'];
      expect(secretSolution(input)).toEqual('worldhello');
    });

    it('should handle a single string in the array', () => {
      const input = ['hello'];
      expect(secretSolution(input)).toEqual('hello');
    });

    it('should reverse the order and concatenate correctly for multiple strings', () => {
      const input = ['a', 'b', 'c', 'd'];
      expect(secretSolution(input)).toEqual('dcba');
    });

    it('should handle numbers in the array as strings when they are valid inputs', () => {
      expect(secretSolution(['123', '456'])).toEqual('456123');
    });
  });
});

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
