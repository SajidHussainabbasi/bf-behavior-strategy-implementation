'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------
function sumNumberyStrings(arr) {
  return arr.reduce((sum, str) => {
    const num = Number(str);
    return !isNaN(num) ? sum + num : sum;
  }, 0);
}
// my tests
describe('sumNumberyStrings', () => {
  test('sums only numbery strings', () => {
    const input = ['10', '20.5', 'hello', '3', 'NaN', ''];
    const result = sumNumberyStrings(input);
    // '' is treated as 0 by Number('')
    expect(result).toBe(33.5); // 10 + 20.5 + 3 + 0
  });

  test('returns 0 for an empty array', () => {
    const result = sumNumberyStrings([]);
    expect(result).toBe(0);
  });
});

const mapFilterReduce = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  // fill in the array methods and pass in the correct logic
  const sumOfNumberies = arr
    .map(castToNumber) // convert all strings to numbers
    .filter(isNotNaN) // remove NaN values
    .reduce(sumNumbers, 0); // sum the rest

  return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [secretSolution, mapFilterReduce]) {
  describe(solution.name + ': sums numbery strings in array', () => {
    describe('basic behavior', () => {
      it('sums numbery strings and ignores non-numbery strings', () => {
        const input = ['10', '5', 'hello', '3.5', 'NaN', ''];
        const result = solution(input);
        expect(result).toBe(18.5); // 10 + 5 + 3.5 + 0 ("" counts as 0)
      });

      it('returns 0 for empty array', () => {
        expect(solution([])).toBe(0);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
