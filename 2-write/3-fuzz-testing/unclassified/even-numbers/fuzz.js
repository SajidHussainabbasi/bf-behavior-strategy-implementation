export const solution = (arr) => {
  return arr.filter((entry) => entry % 2 === 0);
};

export const args = (chance) => {
  const randomNumbers = [];
  const arraySize = Math.floor(Math.random() * 10);
  for (let i = 0; i < arraySize; i++) {
    randomNumbers.push(chance.integer({ min: -999999999, max: 999999999 }));
  }
  return [randomNumbers];
};

//......Tests....

describe('solution - filters even numbers from the array', () => {
  it('returns only even numbers from an array with mixed numbers', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = [2, 4, 6];
    expect(solution(input)).toEqual(output);
  });

  it('returns an empty array when no even numbers are present', () => {
    const input = [1, 3, 5, 7, 9];
    const output = [];
    expect(solution(input)).toEqual(output);
  });

  it('returns the same array if all numbers are even', () => {
    const input = [2, 4, 6, 8];
    const output = [2, 4, 6, 8];
    expect(solution(input)).toEqual(output);
  });
});
