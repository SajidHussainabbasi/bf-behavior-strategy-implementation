import { sortDigits } from './sort-digits.js';

describe('sortDigits', () => {
  it('should sort digits in ascending order by default (up = true)', () => {
    expect(sortDigits(2321)).toBe(1223);
    expect(sortDigits(987)).toBe(789);
    expect(sortDigits(5042)).toBe(245);
  });

  it('should sort digits in ascending order when up is true', () => {
    expect(sortDigits(2321, true)).toBe(1223);
    expect(sortDigits(7001, true)).toBe(17);
  });

  it('should sort digits in descending order when up is false', () => {
    expect(sortDigits(2321, false)).toBe(3221);
    expect(sortDigits(987, false)).toBe(987);
    expect(sortDigits(5042, false)).toBe(5420);
  });

  it('should return 0 when input is 0', () => {
    expect(sortDigits(0)).toBe(0);
  });

  it('should handle single digit numbers', () => {
    expect(sortDigits(7)).toBe(7);
    expect(sortDigits(4, false)).toBe(4);
  });

  it('should handle repeated digits', () => {
    expect(sortDigits(1111)).toBe(1111);
    expect(sortDigits(2221, false)).toBe(2221);
  });
});
