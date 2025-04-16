'use strict';

/**
 *  returns an array with length "max"
 *    each index that's divisible by 3 and 5 stores "fizzbuzz"
 *    each index that's divisible by only 3 stores "fizz"
 *    each index that's divisible by only 5 stores "buzz"
 *    all other indexes store the same number as that index
 *  @param {number} [max=0] - how many numbers to check
 *    max must be an integer greater than or equal to 0
 *  @returns {(number|string)[]} an array of length max
 */

// -------- your solutions --------

const whileLoop = (max) => {
  let countUp = 0;
  const result = [];
  while (countUp < max) {
    const nextEntry =
      countUp % 15 === 0
        ? 'fizzbuzz'
        : countUp % 3 === 0
        ? 'fizz'
        : countUp % 5 === 0
        ? 'buzz'
        : countUp;
    result.push(nextEntry);
    countUp++;
  }
  return result;
};

/* describe this solution's strategy
 */
const oneLineforLoop = (max) => {
  const result = [];
  for (let i = 0; i < max; i++) {
    result.push((i % 3 === 0 ? 'fizz' : '') + (i % 5 === 0 ? 'buzz' : '') || i);
  }
  return result;
};

// https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a

/* describe this solution's strategy
 */
const manySmallFunctions = (max) => {
  const threeDivides = (n) => n % 3 === 0;
  const fiveDivides = (n) => n % 5 === 0;
  const fifteenDivides = (n) => n % 15 === 0;

  const fizzbuzzOrNumber = (num) => {
    if (fifteenDivides(num)) {
      return 'fizzbuzz';
    } else if (threeDivides(num)) {
      return 'fizz';
    } else if (fiveDivides(num)) {
      return 'buzz';
    } else {
      return num;
    }
  };

  const arrayOfIndexes = [...Array(max).keys()];
  const fizzBuzzedArray = arrayOfIndexes.map(fizzbuzzOrNumber);
  return fizzBuzzedArray;
};

// -------- your solutions --------
for (const solution of [
  secretSolution,
  //whileLoop,
  //oneLineforLoop,
  //manySmallFunctions,
]) {
  describe(solution.name + ': fizzbuzz', () => {
    describe('numbers divisible by 3', () => {
      it('3 should return an array with the first 3 values', () => {
        expect(solution(3)).toEqual(['fizzbuzz', 1, 2]);
      });
      it('6 should return an array with the first 6 values', () => {
        expect(solution(6)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz']);
      });
    });

    describe('numbers divisible by neither 3 nor 5', () => {
      it('4 should return an array with the first 4 values', () => {
        expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
      });
      it('7 should return an array with the first 7 values', () => {
        expect(solution(7)).toEqual([
          'fizzbuzz',
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
        ]);
      });
    });

    describe('numbers divisible by 5', () => {
      it('5 should return an array with the first 5 values', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      it('10 should return an array with the first 10 values', () => {
        expect(solution(10)).toEqual([
          'fizzbuzz',
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
        ]);
      });
    });

    describe('numbers divisible by 3 and 5', () => {
      it('30 should return an array with the first 30 values', () => {
  expect(solution(30)).toEqual([
    'fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14,
    'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 29, 'buzz'
  ]);
});
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if ("number" != typeof a) { throw new TypeError("max is not a number"); } if (0 > a) { throw new RangeError("max is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("max is not an integer"); } const b = []; for (let c = 0; c < a; c++) { 0 == c % 3 && 0 == c % 5 ? b.push("fizzbuzz") : 0 == c % 3 ? b.push("fizz") : 0 == c % 5 ? b.push("buzz") : b.push(c); } return b; }
