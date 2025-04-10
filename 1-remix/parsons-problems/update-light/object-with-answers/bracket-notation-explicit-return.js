/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5aeadb48a8d2b32b8a0024e6 */

/* this exercise has 1 distractor */

/**
 * Returns the next color in the traffic light sequence.
 * The sequence follows: green → yellow → red → green.
 *
 * @param {string} current - The current color of the traffic light. Must be 'green', 'yellow', or 'red'.
 * @returns {string} The next color in the sequence.
 *
 * @example
 * updateLight('green'); // returns 'yellow'
 * updateLight('yellow'); // returns 'red'
 * updateLight('red'); // returns 'green'
 */

const updateLight = (current) => {
  return {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current];
};

describe('updateLight', () => {
  it('should return "yellow" when the current light is "green"', () => {
    expect(updateLight('green')).toBe('yellow');
  });

  it('should return "red" when the current light is "yellow"', () => {
    expect(updateLight('yellow')).toBe('red');
  });

  it('should return "green" when the current light is "red"', () => {
    expect(updateLight('red')).toBe('green');
  });
});

//const updateLight = (current) => // distractor
