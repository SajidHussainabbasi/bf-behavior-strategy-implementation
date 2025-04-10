/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5e249517427162000136e463 */

/* this exercise has 1 distractors */

/**
 * Updates the traffic light to the next color in the sequence.
 * The sequence is: green → yellow → red → green, and so on.
 *
 * @param {string} current - The current light color. One of 'green', 'yellow', or 'red'.
 * @returns {string} The next light color in the sequence.
 *
 * @example
 * updateLight('green');  // returns 'yellow'
 * updateLight('yellow'); // returns 'red'
 * updateLight('red');    // returns 'green'
 */

function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  const newLightIndex = lights.indexOf(current) + 1;
  return newLightIndex < 3 ? lights[newLightIndex] : lights[0];
}

//return newLightIndex < 3 ? lights[0] : lights[newLightIndex]; // distractor
describe('updateLight', () => {
  it('should return "yellow" when current is "green"', () => {
    expect(updateLight('green')).toBe('yellow');
  });

  it('should return "green" when current is "red"', () => {
    expect(updateLight('red')).toBe('green');
  });
  it('should return "red" when current is "yellow"', () => {
    expect(updateLight('yellow')).toBe('red');
  });
});
