import { timeInMilliseconds } from './time-in-milliseconds.js';
describe('timeInMilliseconds', () => {
  it('should return 0 when time is 0 hours, 0 minutes, and 0 seconds', () => {
    expect(timeInMilliseconds(0, 0, 0)).toBe(0);
  });

  it('should return 1000 when time is 0 hours, 0 minutes, and 1 second', () => {
    expect(timeInMilliseconds(0, 0, 1)).toBe(1000);
  });

  it('should return 61000 when time is 0 hours, 1 minute, and 1 second', () => {
    expect(timeInMilliseconds(0, 1, 1)).toBe(61000);
  });

  it('should return 3600000 when time is 1 hour, 0 minutes, and 0 seconds', () => {
    expect(timeInMilliseconds(1, 0, 0)).toBe(3600000);
  });

  it('should return 3661000 when time is 1 hour, 1 minute, and 1 second', () => {
    expect(timeInMilliseconds(1, 1, 1)).toBe(3661000);
  });
});
