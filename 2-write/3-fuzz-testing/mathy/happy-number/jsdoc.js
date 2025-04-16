// A "happy" number is defined as follows:

// Start with any positive integer.
// Replace the number with the sum of the squares of its digits.
// Repeat the process until the resulting number becomes 1,
// or it enters a cycle that does not include 1.
// If the process ends with 1, then the original number is considered a happy number.

export const happy = (number) => {
  const noneOfThese = new Array(1000).fill(false);

  while (number !== 1 && !noneOfThese[number]) {
    let next = 0;
    const numerals = Array.from(String(number));

    for (let i = 0; i < numerals.length; i++) {
      next += Math.pow(Number(numerals[i]), 2);
    }

    noneOfThese[number] = true;
    number = next;
  }

  return number === 1;
};

// ....Tests.....
describe('happy: determines whether a number is a happy number', () => {
  it('returns true for 1 (trivially happy)', () => {
    expect(happy(1)).toBe(true);
  });

  it('returns true for a known happy number (19)', () => {
    // 19 → 1² + 9² = 82 → 8² + 2² = 68 → ... → 1
    expect(happy(19)).toBe(true);
  });

  it('returns false for a known unhappy number (4)', () => {
    // 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → loop
    expect(happy(4)).toBe(false);
  });

  it('returns false for 0 (not a happy number)', () => {
    expect(happy(0)).toBe(false);
  });

  it('returns false for a number known to enter a cycle (2)', () => {
    expect(happy(2)).toBe(false);
  });
});
