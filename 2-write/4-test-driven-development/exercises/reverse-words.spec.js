import { reverseWords } from './reverse-words.js';

describe('reverseWords', () => {
  it('should reverse a single word', () => {
    expect(reverseWords('hello')).toBe('olleh');
  });

  it('should reverse each word in a multi-word string', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
    expect(reverseWords('hello world!')).toBe('olleh !dlrow');
  });

  it('should handle an empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  it('should handle strings with multiple spaces between words', () => {
    expect(reverseWords('hello   world')).toBe('olleh   dlrow');
  });

  it('should reverse special characters within words', () => {
    expect(reverseWords('123 !@#')).toBe('321 #@!');
  });

  it('should preserve spaces at the beginning and end', () => {
    expect(reverseWords('  hello world  ')).toBe('  olleh dlrow  ');
  });
});
