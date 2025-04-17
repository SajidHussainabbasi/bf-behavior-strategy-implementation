import { uniqueEntries } from './unique-entries.js';

describe('uniqueEntries', () => {
  it('should return the unique numbers sorted in ascending order by default', () => {
    expect(uniqueEntries([3, 1, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueEntries([5, 5, 1, 2, 3, 2])).toEqual([1, 2, 3, 5]);
    expect(uniqueEntries([7, 4, 3, 1])).toEqual([1, 3, 4, 7]);
  });

  it('should return the unique numbers sorted in ascending order when up is true', () => {
    expect(uniqueEntries([3, 1, 3, 2], true)).toEqual([1, 2, 3]);
    expect(uniqueEntries([5, 5, 1, 2, 3, 2], true)).toEqual([1, 2, 3, 5]);
  });

  it('should return the unique numbers sorted in descending order when up is false', () => {
    expect(uniqueEntries([3, 1, 3, 2], false)).toEqual([3, 2, 1]);
    expect(uniqueEntries([5, 5, 1, 2, 3, 2], false)).toEqual([5, 3, 2, 1]);
  });

  it('should return an empty array when the input is empty', () => {
    expect(uniqueEntries([])).toEqual([]);
  });

  it('should handle arrays with a single element', () => {
    expect(uniqueEntries([5])).toEqual([5]);
  });

  it('should handle negative numbers and sort them correctly', () => {
    expect(uniqueEntries([-1, -2, -3, -2], true)).toEqual([-3, -2, -1]);
    expect(uniqueEntries([-1, -2, -3, -2], false)).toEqual([-1, -2, -3]);
  });
});
