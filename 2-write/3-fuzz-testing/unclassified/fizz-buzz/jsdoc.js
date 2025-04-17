/**
 *  returns an array with "max" number of entries
 *    each index that's divisible by 3 and 5 stores "FizzBuzz"
 *    each index that's divisible by only 3 stores "Fizz"
 *    each index that's divisible by only 5 stores "Buzz"
 *    all other indexes store the same number as that index
 *
 *  @param {number} max - how many numbers to check
 *  @returns {(number|string)[]} an array of length max
 *    all numbers not divisible by 3 or 5 remain
 *    all other numbers are replaced by the correct string
 *  @throws
 */

export const fizzBuzzArray = (max) => {
  if (typeof max !== 'number' || max < 0) {
    throw new TypeError('max must be a non-negative number');
  }

  const result = [];
  for (let i = 0; i < max; i++) {
    if (i % 15 === 0) {
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

//.......Tests........

describe('fizzBuzzArray', () => {
  it('should return an empty array when max is 0', () => {
    expect(fizzBuzzArray(0)).toEqual([]);
  });

  it('should return correct FizzBuzz output for max = 6', () => {
    expect(fizzBuzzArray(6)).toEqual(['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('should throw a TypeError if input is not a valid non-negative number', () => {
    expect(() => fizzBuzzArray(-1)).toThrow(TypeError);
    expect(() => fizzBuzzArray('10')).toThrow(TypeError);
  });
});
