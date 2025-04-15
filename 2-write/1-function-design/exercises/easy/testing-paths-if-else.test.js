'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */
// ...my solution .....
function mySolution(value) {
  return Boolean(value);
}
// The tests
describe('mySolution: checks if a value is truthy or falsy', () => {
  it('should return true for a non-empty string', () => {
    expect(mySolution('hello')).toBe(true);
  });

  it('should return false for the number 0 (falsy value)', () => {
    expect(mySolution(0)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(mySolution(undefined)).toBe(false);
  });
});
// -------- your solutions --------
for (const solution of [secretSolution]) {
  describe(solution.name + ': determines if a value is truthy', () => {
    describe('solution can identify truthy values', () => {
      it('non-empty strings -> true', () => {
        const actual = solution('hello');
        expect(actual).toEqual(true);
      });

      it('numbers that are not 0 or NaN -> true', () => {
        const actual = solution(42);
        expect(actual).toEqual(true);
      });

      it('true -> true', () => {
        expect(solution(true)).toEqual(true);
      });
    });

    describe('solution can identify falsy values', () => {
      it('"" -> false', () => {
        expect(solution('')).toEqual(false);
      });

      it('0 -> false', () => {
        expect(solution(0)).toEqual(false);
      });

      it('NaN -> false', () => {
        expect(solution(NaN)).toEqual(false);
      });

      it('false -> false', () => {
        expect(solution(false)).toEqual(false);
      });

      it('undefined -> false', () => {
        expect(solution(undefined)).toEqual(false);
      });

      it('null -> false', () => {
        expect(solution(null)).toEqual(false);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
