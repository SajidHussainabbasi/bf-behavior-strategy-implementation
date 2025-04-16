/**
 * Reverses and concatenates an array of strings.
 *
 * @param {string[]} arr - The array of strings to be reversed and concatenated.
 * @returns {string} - The result of reversing and concatenating the array elements.
 */
export const arrayMethods = (arr) => {
  return [...arr] // copy to avoid mutating original
    .reverse()
    .reduce((acc, item) => acc + item, '');
};

//......Tests....
describe('arrayMethods: reverses and concatenates an array of strings', () => {
  it('returns a reversed concatenation for a regular array', () => {
    const input = ['one', 'two', 'three'];
    const expected = 'threetwoone';
    expect(arrayMethods(input)).toEqual(expected);
  });

  it('returns an empty string when given an empty array', () => {
    expect(arrayMethods([])).toEqual('');
  });

  it('handles array with one element', () => {
    expect(arrayMethods(['hello'])).toEqual('hello');
  });
});
