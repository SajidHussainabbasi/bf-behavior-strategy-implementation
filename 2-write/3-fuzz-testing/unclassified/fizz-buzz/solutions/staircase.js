const staircase = (max = 0) => {
  let countUp = 0;
  const result = [];
  while (countUp < max) {
    countUp++;
    result.push(
      countUp % 15 === 0
        ? 'FizzBuzz'
        : countUp % 5 === 0
        ? 'Buzz'
        : countUp % 3 === 0
        ? 'Fizz'
        : countUp,
    );
  }
  return result;
};

//.....Tests......
describe('staircase function', () => {
  it('should return an empty array when max is 0', () => {
    expect(staircase(0)).toEqual([]);
  });

  it('should correctly return numbers and fizz/buzz for max = 5', () => {
    expect(staircase(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('should include FizzBuzz when divisible by 15', () => {
    const result = staircase(15);
    expect(result[14]).toBe('FizzBuzz'); // 15th item (index 14)
  });
});
