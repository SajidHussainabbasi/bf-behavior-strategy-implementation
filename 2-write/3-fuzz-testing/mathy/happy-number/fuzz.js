// solution by Angus Croll:  https://github.com/angus-c/literary.js/blob/master/book/woolf/happy.js

function happy(number) {
  var next,
    numerals,
    noneOfThese = [];

  //unless the number was nothing; or one; or unless it had been already tried
  while (number && number != 1 && noneOfThese[number] == null) {
    (next = 0), (numerals = String(number).split(''));
    //digits forced apart, now multiplied, now cast aside; in service of what?
    while (
      ((next = next + numerals[0] * numerals[0]),
      numerals.shift(),
      numerals.length)
    );
    (noneOfThese[number] = true), (number = next);
  }

  //to be one; alone; happily
  return number == 1;
}

export { happy as solution };

export const args = (chance) => [chance.integer({ min: 0, max: 99 })];

describe('happy: determines if a number is a happy number', () => {
  it('returns true for a known happy number (19)', () => {
    expect(happy(19)).toBe(true); // 19 is a happy number
  });

  it('returns false for a known unhappy number (2)', () => {
    expect(happy(2)).toBe(false); // 2 eventually loops and never reaches 1
  });

  it('returns true for the base case 1 (already happy)', () => {
    expect(happy(1)).toBe(true); // 1 is trivially a happy number
  });
});
