import { findSmallestNumber } from './find-smallest-number.js';

describe('findSmallestNumber: returns the smallest number in an array of numbers', () => {
  describe('when the array is not empty, it returns the smallest number', () => {
    it('returns the repeated number when all elements are the same', () => {
      const actual = findSmallestNumber([4, 4, 4, 4]);
      expect(actual).toEqual(4);
    });

    it('returns the first number when the array is in ascending order', () => {
      const actual = findSmallestNumber([1, 2, 3, 4]);
      expect(actual).toEqual(1);
    });

    it('returns the smallest number when the array is in random order', () => {
      const actual = findSmallestNumber([5, 3, 1, 4, 2]);
      expect(actual).toEqual(1);
    });
  });

  describe('when the array is empty, it returns undefined', () => {
    it('returns undefined for an empty array', () => {
      const actual = findSmallestNumber([]);
      expect(actual).toEqual(undefined);
    });
  });

  describe('when the array is invalid, it throws a TypeError', () => {
    it('throws when the array contains non-number elements', () => {
      expect(() => {
        findSmallestNumber([1, 2, '3', 4]);
      }).toThrow(TypeError);
    });

    it('throws when the array contains NaN', () => {
      expect(() => {
        findSmallestNumber([1, NaN, 3, 4]);
      }).toThrow(TypeError);
    });
  });
});
