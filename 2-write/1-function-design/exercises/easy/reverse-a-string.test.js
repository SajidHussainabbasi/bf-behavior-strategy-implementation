'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

function reverseString(toReverse = '') {
  let reversed = '';

  // Loop through the string from the end to the beginning
  for (let i = toReverse.length - 1; i >= 0; i--) {
    reversed += toReverse[i];
  }

  return reversed;
}

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });

    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });

    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });

    it('a string with lowercase letters', () => {
      expect(solution('abcd')).toEqual('dcba');
    });

    it('a string with mixed case', () => {
      expect(solution('aBcD')).toEqual('DcBa');
    });

    it('a string with special characters', () => {
      expect(solution('hello!@#')).toEqual('#@!olleh');
    });

    it('a string with spaces', () => {
      expect(solution('hello world')).toEqual('dlrow olleh');
    });

    it('a single character string remains the same', () => {
      expect(solution('A')).toEqual('A');
    });

    it('works for a very long string', () => {
      const longString = 'a'.repeat(1000); // 'a' repeated 1000 times
      expect(solution(longString)).toEqual('a'.repeat(1000)); // Still the same reversed (same characters)
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
