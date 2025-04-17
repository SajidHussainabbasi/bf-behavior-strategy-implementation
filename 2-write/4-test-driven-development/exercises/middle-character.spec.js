import { middleCharacter } from './middle-character.js';

describe('middleCharacter', () => {
  it('should return empty string for empty input', () => {
    expect(middleCharacter('')).toBe('');
  });

  it('should return the only character for a single-character string', () => {
    expect(middleCharacter('a')).toBe('a');
  });

  it('should return the middle character for odd-length strings', () => {
    expect(middleCharacter('abc')).toBe('b');
    expect(middleCharacter('hello')).toBe('l');
    expect(middleCharacter('abcde')).toBe('c');
  });

  it('should return the two middle characters for even-length strings', () => {
    expect(middleCharacter('abcd')).toBe('bc');
    expect(middleCharacter('middle')).toBe('dd');
    expect(middleCharacter('even')).toBe('ve');
  });
});
