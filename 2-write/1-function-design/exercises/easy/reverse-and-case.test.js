'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
for (const solution of [secretSolution]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true (lowercase)', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });

        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });

      describe('when set to lower case', () => {
        it('empty string -> ""', () => {
          expect(solution('', true)).toEqual('');
        });

        it('"HELLO" -> "olleh"', () => {
          expect(solution('HELLO', true)).toEqual('olleh');
        });

        it('"hello" -> "olleh"', () => {
          expect(solution('hello', true)).toEqual('olleh');
        });

        it('"HeLLo" -> "olleh"', () => {
          expect(solution('HeLLo', true)).toEqual('olleh');
        });

        it('"Hi!" -> "!ih"', () => {
          expect(solution('Hi!', true)).toEqual('!ih');
        });

        it('"123abc" -> "cba321"', () => {
          expect(solution('123abc', true)).toEqual('cba321');
        });
      });

      describe('when set to upper case', () => {
        it('empty string -> ""', () => {
          expect(solution('', false)).toEqual('');
        });

        it('"HELLO" -> "OLLEH"', () => {
          expect(solution('HELLO', false)).toEqual('OLLEH');
        });

        it('"hello" -> "OLLEH"', () => {
          expect(solution('hello', false)).toEqual('OLLEH');
        });

        it('"HeLLo" -> "OLLEH"', () => {
          expect(solution('HeLLo', false)).toEqual('OLLEH');
        });

        it('"Hi!" -> "!IH"', () => {
          expect(solution('Hi!', false)).toEqual('!IH');
        });

        it('"123abc" -> "CBA321"', () => {
          expect(solution('123abc', false)).toEqual('CBA321');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
