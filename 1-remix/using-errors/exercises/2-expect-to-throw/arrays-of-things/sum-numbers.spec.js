import { sumNumbers } from './sum-numbers.js';

describe('sumNumbers: sums all the numbers in an array of numbers', () => {
  describe('when the array is not empty, it returns a number', () => {
    it('returns the correct sum when all numbers are the same', () => {
      const actual = sumNumbers([4, 4, 4, 4]);
      expect(actual).toEqual(16);
    });

    it('returns the correct sum when there are different numbers', () => {
      const actual = sumNumbers([1, 2, 3, 4]);
      expect(actual).toEqual(10);
    });

    it('returns the correct sum with decimal numbers', () => {
      const actual = sumNumbers([1, 2.5, 3.5, 4.5]);
      expect(actual).toEqual(11.5);
    });
  });

  describe('when the array is empty, it returns 0', () => {
    it('returns 0 for an empty array', () => {
      const actual = sumNumbers([]);
      expect(actual).toEqual(0);
    });
  });

  describe('when the array is invalid, it throws a TypeError', () => {
    it('throws an error if the array contains non-number elements', () => {
      expect(() => {
        sumNumbers([1, 2, '3', 4]);
      }).toThrow(TypeError);
    });

    it('throws an error if the array contains NaN', () => {
      expect(() => {
        sumNumbers([1, NaN, 3, 4]);
      }).toThrow(TypeError);
    });
  });
});
