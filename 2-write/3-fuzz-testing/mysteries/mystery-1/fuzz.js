/**
 * Removes duplicate values from an array.
 *
 * This function returns a new array containing only the unique values from the input array,
 * preserving the order of first occurrence.
 *
 * @function
 * @param {Array} array - An array of primitive values (e.g., strings, numbers, booleans).
 * @returns {Array} A new array with only the unique values from the input.
 *
 * @example
 * uniqueArray([1, 2, 3, 1, 2]); // returns [1, 2, 3]
 * @example
 * uniqueArray(['a', 'b', 'a', 'c']); // returns ['a', 'b', 'c']
 */
export const solution = (array) => Array.from(new Set(array));

export const args = (chance) => {
  const values = [];
  const arraySize = Math.floor(Math.random() * 10);
  for (let i = 0; i < arraySize; i++) {
    const nextRando = chance.word();
    values.push(nextRando);
    if (Math.random() < 0.3) {
      values.push(nextRando);
    }
    if (Math.random() < 0.2) {
      values.push(nextRando);
    }
    if (Math.random() < 0.1) {
      values.push(nextRando);
    }
  }

  // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }
  return [values];
};

describe('solution - removes duplicate values from an array', () => {
  it('returns unique values from an array of numbers', () => {
    expect(solution([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('returns unique values from an array of strings', () => {
    expect(solution(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if input is empty', () => {
    expect(solution([])).toEqual([]);
  });
});
