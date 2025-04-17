import { diffArrays } from './diff-arrays.js';

describe('diffArrays', () => {
  it('returns items not in both arrays (basic)', () => {
    expect(diffArrays([1, 2], [2, 3])).toEqual([1, 3]);
  });

  it('handles NaN correctly', () => {
    expect(diffArrays([NaN, 2], [1, NaN])).toEqual([2, 1]);
  });

  it('returns all items if arrays have no common values', () => {
    expect(diffArrays([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
