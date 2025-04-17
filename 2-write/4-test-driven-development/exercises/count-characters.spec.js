import { countCharacters } from './count-characters.js';

describe('countCharacters', () => {
  it('should return an empty object for an empty string', () => {
    expect(countCharacters('')).toEqual({});
  });

  it('should count characters correctly in a short string', () => {
    expect(countCharacters('hi')).toEqual({ h: 1, i: 1 });
  });

  it('should handle repeated characters correctly', () => {
    expect(countCharacters('hiiii')).toEqual({ h: 1, i: 4 });
  });

  it('should count characters correctly in a longer string', () => {
    expect(countCharacters('heloo world')).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 3,
      ' ': 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});
