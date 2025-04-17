import { matchingBraces } from './matching-braces.js';

describe('matchingBraces', () => {
  it('should return false for a single unmatched opening bracket', () => {
    expect(matchingBraces('[')).toBe(false);
  });

  it('should return true for a simple matched pair of parentheses', () => {
    expect(matchingBraces('()')).toBe(true);
  });

  it('should return false for mismatched braces', () => {
    expect(matchingBraces('(]')).toBe(false);
  });

  it('should return true for nested correct braces', () => {
    expect(matchingBraces('{[]}')).toBe(true);
  });

  it('should return false for incorrectly nested braces', () => {
    expect(matchingBraces('([)]')).toBe(false);
  });

  it('should return true for multiple sets of correctly matched braces', () => {
    expect(matchingBraces('()[]{}')).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(matchingBraces('')).toBe(true);
  });

  it('should return false if closing comes before opening', () => {
    expect(matchingBraces(')(')).toBe(false);
  });
});
