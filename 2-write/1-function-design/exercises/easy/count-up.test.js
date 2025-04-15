// #todo

'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------
function countup(max = 0) {
  if (!Number.isInteger(max) || max <= 0) {
    throw new Error('max must be an integer greater than 0.');
  }

  const result = [];
  for (let i = 0; i <= max; i++) {
    result.push(i);
  }

  return result;
}
//...... my tests ....
describe('My solution for countup', () => {
  it('counts up from 0 to 3', () => {
    expect(countup(3)).toEqual([0, 1, 2, 3]);
  });

  it('throws an error for non-integer input (e.g., 2.5)', () => {
    expect(() => countup(2.5)).toThrow(
      'max must be an integer greater than 0.',
    );
  });

  it('throws an error for non-positive input (e.g., 0 or negative)', () => {
    expect(() => countup(0)).toThrow('max must be an integer greater than 0.');
    expect(() => countup(-1)).toThrow('max must be an integer greater than 0.');
  });
});

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter is 0 -> [0]', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });

    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });

    it('1 -> [0, 1]', () => {
      expect(solution(1)).toEqual([0, 1]);
    });

    it('5 -> [0, 1, 2, 3, 4, 5]', () => {
      expect(solution(5)).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it('10 -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      expect(solution(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('throws error for negative number (-1)', () => {
      expect(() => solution(-1)).toThrow('max is less than 0');
    });

    it('throws error for non-integer input (e.g., 2.5)', () => {
      expect(() => solution(2.5)).toThrow('max is not an integer');
    });

    it('throws error for string input ("5")', () => {
      expect(() => solution('5')).toThrow('max is not a number');
    });

    it('works for a large number (100)', () => {
      const result = solution(100);
      expect(result.length).toBe(101); // it should have 101 elements (0 to 100)
      expect(result[0]).toBe(0);
      expect(result[100]).toBe(100);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
