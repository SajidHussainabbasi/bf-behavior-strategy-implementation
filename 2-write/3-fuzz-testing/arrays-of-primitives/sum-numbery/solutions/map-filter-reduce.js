export const mapFilterReduce = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  // fill in the array methods and pass in the correct logic
  const allValidNumbers = arr
    .map(castToNumber)
    .filter(isNotNaN)
    .reduce(sumNumbers, 0);

  return allValidNumbers;
};

describe('mapFilterReduce: converts to numbers, filters NaN, and sums', () => {
  it('sums numeric strings and numbers correctly', () => {
    const input = ['1', 2, '3'];
    expect(mapFilterReduce(input)).toBe(6);
  });

  it('ignores non-numbery values after cast', () => {
    const input = ['1', 'two', {}, [], null];
    // ['1', 'two', {}, [], null] -> [1, NaN, NaN, 0, 0] -> [1, 0, 0]
    expect(mapFilterReduce(input)).toBe(1);
  });

  it('returns 0 for empty array', () => {
    expect(mapFilterReduce([])).toBe(0);
  });

  it('returns 0 if all values cast to NaN', () => {
    const input = ['hello', {}, undefined];
    expect(mapFilterReduce(input)).toBe(0);
  });
});
