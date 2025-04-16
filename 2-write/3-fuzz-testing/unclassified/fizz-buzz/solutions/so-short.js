export const soShort = (max = 0) => {
  const result = [];
  for (let i = 1; i <= max; i++) {
    // For numbers divisible by both 3 and 5, return 'FizzBuzz'
    // For numbers divisible by only 3, return 'Fizz'
    // For numbers divisible by only 5, return 'Buzz'
    // Otherwise, return the number itself
    result.push(
      (i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : '') ||
        (i % 3 === 0 ? 'Fizz' : '') ||
        (i % 5 === 0 ? 'Buzz' : '') ||
        i,
    );
  }
  return result;
};

//.....Tests......

describe('soShort', () => {
  it('should return correct FizzBuzz pattern up to 15', () => {
    const result = soShort(15);
    expect(result).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ]);
  });

  it('should return numbers when no number is divisible by 3 or 5', () => {
    const result = soShort(2);
    expect(result).toEqual([1, 2]);
  });

  it('should return an empty array when max is 0', () => {
    const result = soShort(0);
    expect(result).toEqual([]);
  });
});
