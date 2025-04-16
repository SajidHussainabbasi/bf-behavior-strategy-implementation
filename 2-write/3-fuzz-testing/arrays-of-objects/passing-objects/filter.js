/**
 * Filters an array of objects based on the 'pass' property.
 *
 * @param {Array} arr - The array of objects to be filtered.
 * @returns {Array} - A new array containing only the objects that have 'pass' property set to true.
 */
export const solution = (arr) => {
  return arr.filter((obj) => obj.pass === true);
};

// ---------- Tests ----------
describe('solution: filters objects based on pass property', () => {
  it('returns only objects with pass: true', () => {
    const input = [
      { name: 'Alice', pass: true },
      { name: 'Bob', pass: false },
      { name: 'Charlie', pass: true },
    ];
    const expected = [
      { name: 'Alice', pass: true },
      { name: 'Charlie', pass: true },
    ];
    expect(solution(input)).toEqual(expected);
  });

  it('returns empty array when no object passes', () => {
    const input = [
      { name: 'Bob', pass: false },
      { name: 'Dave', pass: false },
    ];
    expect(solution(input)).toEqual([]);
  });

  it('returns all objects when all pass', () => {
    const input = [
      { name: 'Ella', pass: true },
      { name: 'Frank', pass: true },
    ];
    const expected = [
      { name: 'Ella', pass: true },
      { name: 'Frank', pass: true },
    ];
    expect(solution(input)).toEqual(expected);
  });

  it('returns empty array when input is empty', () => {
    expect(solution([])).toEqual([]);
  });

  it('ignores objects that don’t have a pass property', () => {
    const input = [{ name: 'George' }, { name: 'Helen', pass: true }];
    const expected = [{ name: 'Helen', pass: true }];
    expect(solution(input)).toEqual(expected);
  });
});
