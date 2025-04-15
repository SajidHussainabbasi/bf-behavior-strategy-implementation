'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });

    describe('when set to lower case', () => {
      it('an empty string -> ""', () => {
        expect(solution('', true)).toEqual('');
      });

      it('all upper case -> "hello"', () => {
        expect(solution('HELLO', true)).toEqual('hello');
      });

      it('all lower case remains "hello"', () => {
        expect(solution('hello', true)).toEqual('hello');
      });

      it('mixed case "HeLLo" -> "hello"', () => {
        expect(solution('HeLLo', true)).toEqual('hello');
      });

      it('"Hi!" with punctuation -> "hi!"', () => {
        expect(solution('Hi!', true)).toEqual('hi!');
      });

      it('"123ABC" with numbers -> "123abc"', () => {
        expect(solution('123ABC', true)).toEqual('123abc');
      });
    });

    describe('when set to upper case', () => {
      it('an empty string -> ""', () => {
        expect(solution('', false)).toEqual('');
      });

      it('all upper case remains "HELLO"', () => {
        expect(solution('HELLO', false)).toEqual('HELLO');
      });

      it('all lower case -> "HELLO"', () => {
        expect(solution('hello', false)).toEqual('HELLO');
      });

      it('mixed case "HeLLo" -> "HELLO"', () => {
        expect(solution('HeLLo', false)).toEqual('HELLO');
      });

      it('"Hi!" with punctuation -> "HI!"', () => {
        expect(solution('Hi!', false)).toEqual('HI!');
      });

      it('"123abc" with numbers -> "123ABC"', () => {
        expect(solution('123abc', false)).toEqual('123ABC');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
