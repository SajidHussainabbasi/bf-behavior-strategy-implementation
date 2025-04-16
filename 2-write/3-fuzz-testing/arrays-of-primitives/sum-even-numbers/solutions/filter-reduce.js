/**
 * sums all even numbers in an array
 * @param {array} arr - an array of numbers
 * @returns {number} - the sum of all even numbers in argument
 */

export const filterReduce = (arr) => {
    return arr
        .reverse()
        .filter((num) => num % 2 === 0) // keep the even numbers
        .reduce((sum, num) => sum + num, 0); // add all the even numbers
};

//...Tests...

describe('filterReduce: sums all even numbers in an array', () => {
  it('returns the correct sum for a mix of even and odd numbers', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = 2 + 4 + 6;
    expect(filterReduce(input)).toBe(expected);
  });

  it('returns 0 when there are no even numbers', () => {
    const input = [1, 3, 5, 7];
    expect(filterReduce(input)).toBe(0);
  });

  it('returns 0 for an empty array', () => {
    expect(filterReduce([])).toBe(0);
  });
});