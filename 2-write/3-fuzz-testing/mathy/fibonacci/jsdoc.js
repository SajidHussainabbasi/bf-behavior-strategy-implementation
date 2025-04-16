/**
 * A function that returns the first n numbers of the Fibonacci sequence.
 *
 * @param {number} n - An integer indicating how many Fibonacci numbers to calculate.
 * @returns {number[]} An array containing the first n Fibonacci numbers.
 */
export const fibonacci = (n) => {
  if (typeof n === 'string') {
    n = parseInt(n);
  }

  if (isNaN(n) || n < 0) {
    return 'OOPS';
  }

  if (n === 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};

fibonacci(0); // -> []
fibonacci(1); // -> [0]
fibonacci(2); // -> [0, 1]
fibonacci(5); // -> [0, 1, 1, 2, 3]

describe('fibonacci: returns the first n Fibonacci numbers', () => {
  it('returns correct sequence for n = 5', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it('returns an empty array for n = 0', () => {
    expect(fibonacci(0)).toEqual([]);
  });

  it('returns "OOPS" for negative input', () => {
    expect(fibonacci(-3)).toBe('OOPS');
  });
});
