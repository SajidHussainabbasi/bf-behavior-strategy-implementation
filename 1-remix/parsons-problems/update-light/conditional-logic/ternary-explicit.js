/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad9bc6a0be029ab0800071b */

/* this exercise has 2 distractors */

/**
 * Updates the traffic light color based on the current light.
 * The lights cycle in the order: green → yellow → red → green → ...
 *
 * @param {string} current - The current traffic light color. Must be 'green', 'yellow', or 'red'.
 * @returns {string} The next traffic light color in the cycle.
 *
 * @example
 * updateLight('green'); // returns 'yellow'
 * updateLight('yellow'); // returns 'red'
 * updateLight('red'); // returns 'green'
 */

function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}

//current === 'yellow'; // distractor
//function updateLight = (current) => { // distractor
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
