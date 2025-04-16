/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 *
 * @author https://github.com/andrewborisov/javascript-practice/blob/master/arrays/solutions/09-chunk.js
 */
export const solution = (array, size) => {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
};

export const args = (chance) => {
  const values = [];
  const arraySize = Math.floor(Math.random() * 20);
  for (let i = 0; i < arraySize; i++) {
    values.push(chance.word());
  }

  const chunkSize = chance.integer({ min: 1, max: 6 });

  return [values, chunkSize];
};

//......Tests.........

describe('solution - splits an array into chunks of a given size', () => {
  it('splits an array of 5 elements into chunks of size 2', () => {
    const result = solution([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('returns one chunk if size is larger than array length', () => {
    const result = solution([1, 2, 3], 10);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('returns an empty array when given an empty array', () => {
    const result = solution([], 3);
    expect(result).toEqual([]);
  });
});
