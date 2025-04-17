import { evenOrOdd } from './even-or-odd.js';

describe('evenOrOdd', () => {
  it('should return ["odd", "even", "odd", "even"] for [1, 2, 3, 4]', () => {
    expect(evenOrOdd([1, 2, 3, 4])).toEqual(['odd', 'even', 'odd', 'even']);
  });

  it('should return an empty array for an empty input', () => {
    expect(evenOrOdd([])).toEqual([]);
  });

  it('should correctly handle zero and negative numbers', () => {
    expect(evenOrOdd([0, -1, -2])).toEqual(['even', 'odd', 'even']);
  });

  it('should return ["odd", "even"] for [1, 2]', () => {
    expect(evenOrOdd([1, 2])).toEqual(['odd', 'even']);
  });

  it('should handle a single even number', () => {
    expect(evenOrOdd([8])).toEqual(['even']);
  });

  it('should handle a single odd number', () => {
    expect(evenOrOdd([7])).toEqual(['odd']);
  });
});
