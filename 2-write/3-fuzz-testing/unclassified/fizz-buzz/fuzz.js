/**
 * Generates a FizzBuzz-style sequence up to a given maximum number (exclusive).
 *
 * For each number from 0 to max - 1:
 * - Adds "FizzBuzz" if divisible by both 3 and 5,
 * - Adds "Fizz" if divisible by 3,
 * - Adds "Buzz" if divisible by 5,
 * - Otherwise adds the number itself.
 *
 * @param {number} [max=0] - The upper bound (exclusive) for the sequence.
 * @returns {Array<string|number>} An array containing the FizzBuzz results.
 *
 * @example
 * solution(5); // Returns ['FizzBuzz', 1, 2, 'Fizz', 4]
 */

export const solution = (max = 0) => {
  const result = [];
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
};

export const args = (chance) => [chance.integer({ min: 0, max: 100 })];

//..........Tests......

describe('solution function', () => {
  it('should return an empty array when max is 0', () => {
    expect(solution(0)).toEqual([]);
  });

  it('should return correct FizzBuzz sequence up to 5', () => {
    expect(solution(5)).toEqual(['FizzBuzz', 1, 2, 'Fizz', 4]);
  });

  it('should include FizzBuzz at correct position when max is 16', () => {
    const result = solution(16);
    expect(result[15]).toBe('FizzBuzz'); // Index 15 is number 15
  });
});
