/**
 * Finds and returns all prime numbers up to a given number using the Sieve of Eratosthenes algorithm.
 *
 * This poetic function imagines a procession of creatures ascending a staircase,
 * where steps numbered by prime numbers are left untouched by the beasts.
 *
 * @function
 * @param {number} numberOfSteps - The maximum number to check for primality (inclusive).
 * @returns {number[]} An array of prime numbers from 2 up to and including `numberOfSteps`.
 *
 * @example
 * monstersAscendingAStaircase(10);
 * // returns [2, 3, 5, 7]
 *
 * @example
 * monstersAscendingAStaircase(1);
 * // returns []
 *
 * @example
 * monstersAscendingAStaircase(30);
 * // returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
 *
 */

var monstersAscendingAStaircase = function (numberOfSteps) {
  var stairs = [],
    stepsUntrodden = [];
  var largestGait = Math.sqrt(numberOfSteps);

  // A succession of creatures mount the stairs;
  // each creature's stride exceeds that of its predecessor.
  for (var i = 2; i <= largestGait; i++) {
    if (!stairs[i]) {
      for (var j = i * i; j <= numberOfSteps; j += i) {
        stairs[j] = 'stomp';
      }
    }
  }

  // Long-limbed monsters won't tread on prime-numbered stairs.
  for (var i = 2; i <= numberOfSteps; i++) {
    if (!stairs[i]) {
      stepsUntrodden.push(i);
    }
  }

  // Here, then, is our answer.
  return stepsUntrodden;
};

export { monstersAscendingAStaircase as solution };

export const args = (chance) => [chance.integer({ min: 0, max: 99 })];

describe('monstersAscendingAStaircase: returns prime numbers up to a given number', () => {
  it('returns correct primes up to 10', () => {
    const result = monstersAscendingAStaircase(10);
    expect(result).toEqual([2, 3, 5, 7]);
  });

  it('returns empty array for 0 and 1 (no primes)', () => {
    expect(monstersAscendingAStaircase(0)).toEqual([]);
    expect(monstersAscendingAStaircase(1)).toEqual([]);
  });

  it('returns primes up to 30', () => {
    const result = monstersAscendingAStaircase(30);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('returns only [2] when input is 2', () => {
    expect(monstersAscendingAStaircase(2)).toEqual([2]);
  });

  it('works correctly for a larger number like 50', () => {
    const result = monstersAscendingAStaircase(50);
    expect(result).toEqual([
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
    ]);
  });
});
