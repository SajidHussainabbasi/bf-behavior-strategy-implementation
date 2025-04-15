'use strict';

/* 2. First Strategy

  Think of a strategy for solving this challenge, it doesn't need to be perfect!

  write out your strategy in a block comment, as pseudocode or normal sentences

  you will try finding a few implementations for your strategy.

*/

// =============== JSDoc description of the challenge ===============

/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions must be greater than zero, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */

// =============== your solutions will go here ===============

const forLoopTry1 = (text = '', repetitions = 1) => {
  if (!Number.isInteger(repetitions) || repetitions <= 0) {
    throw new Error(
      'Repetitions must be a positive integer greater than zero.',
    );
  }

  let result = '';
  for (let i = 0; i < repetitions; i++) {
    result += text;
  }

  return result;
};

/* -- iteration: append the string to itself once for each repetition --

  1. create a new empty string to store the accumulated result
  2. iterate from zero the the number of repetitions
    a. add the text to the accumulator one more time
  return: the accumulated result

*/
describe('forLoopTry1', () => {
  it('repeats "abc" 3 times', () => {
    const result = forLoopTry1('abc', 3);
    expect(result).toBe('abcabcabc');
  });

  it('throws an error for 0 repetitions', () => {
    expect(() => forLoopTry1('abc', 0)).toThrow(
      'Repetitions must be a positive integer greater than zero.',
    );
  });
});

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [
  // secretSolution,
  forLoopTry1,
]) {
  // =============== test cases for this challenge ===============

  describe(`${solution.name}: repeating a string:`, () => {
    describe('default parameters', () => {
      it('repeat once if no repetitions is passed', () => {
        expect(solution('asdf')).toEqual('asdf');
      });

      it('expect an empty string if no arguments are passed', () => {
        expect(solution()).toEqual('');
      });
    });

    describe('an empty string', () => {
      it('throws an error when repeating an empty string 0 times', () => {
        expect(() => solution('', 0)).toThrow(
          'Repetitions must be a positive integer greater than zero.'
        );
      });

      it('repeat an empty string 10 times -> ""', () => {
        expect(solution('', 10)).toEqual('');
      });

      it('repeat an empty string 100 times -> ""', () => {
        expect(solution('', 100)).toEqual('');
      });
    });

    describe('zero repetitions', () => {
      it('throws an error when repeating "asdf" 0 times', () => {
        expect(() => solution('asdf', 0)).toThrow(
          'Repetitions must be a positive integer greater than zero.'
        );
      });

      it('throws an error when repeating "tommywalk" 0 times', () => {
        expect(() => solution('tommywalk', 0)).toThrow(
          'Repetitions must be a positive integer greater than zero.'
        );
      });
    });

    describe('standard use cases', () => {
      it('repeating a longer phrase 3 times', () => {
        expect(solution('go to school', 3)).toEqual(
          'go to schoolgo to schoolgo to school'
        );
      });

      it('repeating a phrase with punctuation', () => {
        expect(solution('"Go!", said Dr. Seuss?', 2)).toEqual(
          '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
        );
      });

      it('a string with special characters can be repeated', () => {
        expect(solution('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
      });
    });
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
