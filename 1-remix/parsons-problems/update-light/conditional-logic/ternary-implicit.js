/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5b16df8ca6d5f9f11e000a41 */

/**
 * Returns the next color in the traffic light sequence.
 * The sequence follows: green → yellow → red → green.
 *
 * @param {string} current - The current color of the traffic light. Expected values are 'green', 'yellow', or 'red'.
 * @returns {string} The next color in the traffic light cycle.
 *
 * @example
 * updateLight('green'); // returns 'yellow'
 * updateLight('yellow'); // returns 'red'
 * updateLight('red'); // returns 'green'
 */

const updateLight = (current) =>
  current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';

//current == 'yellow' ? 'green' : current == 'red' ? 'yellow' : 'red'; // distractor

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
