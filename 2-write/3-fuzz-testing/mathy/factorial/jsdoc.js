/**
 * A function that calculates the factorial for a given number.
 *
 * @param {number} n - An integer to factorialize.
 * @returns {number} The factorial of n.
 *
 * @example
 * factorial(0); // -> 1
 *
 * @example
 * factorial(1); // -> 1
 *
 * @example
 * factorial(2); // -> 2
 *
 * @example
 * factorial(5); // -> 120
 */
export const factorial = (num) => {
  if (num < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

//...Tests....
describe('factorial: calculates the factorial of a number', () => {
  it('returns 1 for input 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('returns 1 for input 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('returns correct factorial for 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('returns correct factorial for 7', () => {
    expect(factorial(7)).toBe(5040);
  });

  it('throws an error for negative input', () => {
    expect(() => factorial(-1)).toThrow(
      'Factorial is not defined for negative numbers.',
    );
  });
});
