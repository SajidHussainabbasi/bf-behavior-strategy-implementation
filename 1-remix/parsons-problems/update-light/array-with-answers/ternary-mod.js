/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ae4e6e3f7f98ce2380003d4 */

/* this exercise has 2 distractors */

/**
 * Updates the traffic light color based on the current light.
 * The lights cycle in the order: green → yellow → red → green → ...
 *
 * @param {string} current - The current traffic light color. It must be one of 'green', 'yellow', or 'red'.
 * @returns {string} The next traffic light color in the cycle.
 * @throws {Error} Throws an error if the provided color is not one of 'green', 'yellow', or 'red'.
 *
 * @example
 * updateLight('green'); // Returns 'yellow'
 * updateLight('yellow'); // Returns 'red'
 * updateLight('red'); // Returns 'green'
 */

function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  return lights[(lights.indexOf(current) + 1) % lights.length];
}

//const lights = 'green', 'yellow', 'red'; // distractor
//lights[(lights.indexOf(current) + 1) % lights.length]; // distractor
describe('updateLight', () => {
  it('should return "yellow" when the current light is "green"', () => {
    const result = updateLight('green');
    expect(result).toBe('yellow');
  });

  it('should return "red" when the current light is "yellow"', () => {
    const result = updateLight('yellow');
    expect(result).toBe('red');
  });

  it('should return "green" when the current light is "red"', () => {
    const result = updateLight('red');
    expect(result).toBe('green');
  });
});
