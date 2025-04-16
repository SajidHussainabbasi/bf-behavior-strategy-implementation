/**
 * Filter an array and keep only numbers.
 *
 * @param {Array} arr - The array to filter.
 * @returns {Array} - A new array containing only  valid numbers
 */

export const mapFilter = (arr) => {
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const castToNumber = (entry) => Number(entry);

  const numbers = arr.map(castToNumber);
  const allValidNumbers = numbers.filter(isNotNaN);

  return allValidNumbers;
};

//.....Tests.....

describe('mapFilter: keeps only valid numbers', () => {
  it('filters valid numbers from mixed input', () => {
    const input = ['1', 2, 'three', 4, '5.5', NaN, null, undefined, true];
    const output = [1, 2, 4, 5.5, 0, 1];
    expect(mapFilter(input)).toEqual(output);
  });

it('returns empty array if all values are invalid', () => {
  expect(mapFilter(['a', 'NaN', {}, undefined])).toEqual([]);
});

  it('returns an empty array when input is empty', () => {
    expect(mapFilter([])).toEqual([]);
  });
});
