export const manyFunctions = (max = 0) => {
  // Helper function for divisibility by 3
  const threeDivides = (n) => n % 3 === 0;

  // Helper function for divisibility by 5
  const fiveDivides = (n) => n % 5 === 0;

  // Helper function for divisibility by 15 (both 3 and 5)
  const fifteenDivides = (n) => n % 15 === 0;

  // Main FizzBuzz function
  const FizzBuzzOrNumber = (num) => {
    if (fifteenDivides(num)) {
      return 'FizzBuzz';
    } else if (threeDivides(num)) {
      return 'Fizz';
    } else if (fiveDivides(num)) {
      return 'Buzz';
    } else {
      return num;
    }
  };

  // Generate the result array
  return [...Array(max).keys()].map((num) => FizzBuzzOrNumber(num + 1)); // We use `num + 1` since the index starts from 0
};

//....Tests......

describe('manyFunctions', () => {
  it('should return FizzBuzz for numbers divisible by both 3 and 5', () => {
    const result = manyFunctions(15);
    expect(result[14]).toBe('FizzBuzz'); // 15 is divisible by both 3 and 5
  });

  it('should return Fizz for numbers divisible by 3 but not 5', () => {
    const result = manyFunctions(10);
    expect(result[2]).toBe('Fizz'); // 3 is divisible by 3 but not 5
    expect(result[5]).toBe('Fizz'); // 6 is divisible by 3 but not 5
  });

  it('should return Buzz for numbers divisible by 5 but not 3', () => {
    const result = manyFunctions(10);
    expect(result[4]).toBe('Buzz'); // 5 is divisible by 5 but not 3
    expect(result[9]).toBe('Buzz'); // 10 is divisible by 5 but not 3
  });

  it('should return the number itself if not divisible by 3 or 5', () => {
    const result = manyFunctions(10);
    expect(result[0]).toBe(1); // 1 is not divisible by 3 or 5
    expect(result[3]).toBe(4); // 4 is not divisible by 3 or 5
  });
});
