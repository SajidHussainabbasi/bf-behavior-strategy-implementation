/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/60743965cb7e980001c7bc44 */

/* this exercise has 2 distractors */

/**
 * Updates the traffic light color based on the current light.
 * The traffic light follows the sequence: green -> yellow -> red -> green.
 *
 * @param {string} current - The current color of the traffic light (either 'green', 'yellow', or 'red').
 * @returns {string} The next color in the traffic light sequence.
 *
 * @example
 * updateLight('green'); // returns 'yellow'
 * updateLight('yellow'); // returns 'red'
 * updateLight('red'); // returns 'green'
 */

function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];

  return current === 'red' ? 'green' : lights[lights.indexOf(current) + 1];
}

//current === 'red' ? 'green' : lights[lights.indexOf(current) + 1]; // distractor
//const lights = [green, yellow, red]; // distractor

describe('updateLight', function () {
  it('should return "yellow" when the current light is "green"', function () {
    const result = updateLight('green');
    expect(result).toEqual('yellow');
  });

  it('should return "red" when the current light is "yellow"', function () {
    const result = updateLight('yellow');
    expect(result).toEqual('red');
  });

  it('should return "green" when the current light is "red"', function () {
    const result = updateLight('red');
    expect(result).toEqual('green');
  });
});
