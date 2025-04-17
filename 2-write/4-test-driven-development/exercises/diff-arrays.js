/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 * @example
 *
 * diffArrays([2], [1, 3]); // [3]
 *
 * @example
 *
 * diffArrays([2, NaN], [3, 1]); // [NaN, 3]
 *
 * @example
 *
 * diffArrays([2, 1], [3, 2]); // []
 * @example
 *
 * diffArrays([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
 */
export const diffArrays = (a = [], b = []) => {
  const result = [];

  const isEqual = (x, y) =>
    x === y ||
    (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));

  const inOtherArray = (item, arr) => arr.some((el) => isEqual(el, item));

  for (const item of a) {
    if (!inOtherArray(item, b)) {
      result.push(item);
    }
  }

  for (const item of b) {
    if (!inOtherArray(item, a)) {
      result.push(item);
    }
  }

  return result;
};

console.log(diffArrays([2, 1], [3, 2])); // [1,3]
console.log(diffArrays([1, 2, 3], [4, 5])); // [1, 2, 3, 4, 5]
