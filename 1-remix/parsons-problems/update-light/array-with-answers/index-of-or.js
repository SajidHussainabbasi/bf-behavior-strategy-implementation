/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/6074247d1252420001d90310 */

/* this exercise has 2 distractors */

/**
 * Updates the traffic light to the next color in sequence.
 * The sequence is: green → yellow → red → green, and so on.
 *
 * @param {string} current - The current light color. One of 'green', 'yellow', or 'red'.
 * @returns {string} The next light color in the sequence.
 *
 * @example
 * updateLight('green'); // returns 'yellow'
 * updateLight('yellow'); // returns 'red'
 * updateLight('red'); // returns 'green'
 */

function updateLight(current) {
  let lights = ['green', 'yellow', 'red'];
  return lights[lights.indexOf(current) + 1] || 'green';
}
console.log('Your current light is green :', updateLight('green'));
console.log('Your current light is yellow :', updateLight('yellow'));
console.log('Your current light is red :', updateLight('red'));
//return lights[lights.indexOf(current) + 1] && 'green'; // distractor
//return lights[lights.indexOf(current) + 1] ? 'green'; // distractor

describe('updateLight', () => {
  it('should return "yellow" when current is "green"', () => {
    expect(updateLight('green')).toBe('yellow');
  });

  it('should return "green" when current is "red"', () => {
    expect(updateLight('red')).toBe('green');
  });
});
