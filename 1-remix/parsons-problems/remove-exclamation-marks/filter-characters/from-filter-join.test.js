import removeExclamationMarks from './from-filter-join.js';
describe('removeExclamationMarks', () => {
  test('removes all exclamation marks from the string', () => {
    const input = 'He!llo! Wo!rld!';
    const expected = 'Hello World';
    expect(removeExclamationMarks(input)).toBe(expected);
  });
});