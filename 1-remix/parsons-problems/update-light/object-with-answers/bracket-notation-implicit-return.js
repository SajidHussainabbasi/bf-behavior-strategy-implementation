/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5adb82cd43f6f7525400142f */

/* this exercise has 1 distractors */

/**
 * Updates the traffic light to the next color in sequence.
 *
 * The traffic light cycles in the following order:
 * - green → yellow
 * - yellow → red
 * - red → green
 *
 * @param {'green' | 'yellow' | 'red'} current - The current color of the traffic light.
 * @returns {'green' | 'yellow' | 'red'} - The next color of the traffic light.
 */

const updateLight = (current) =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);

//const updateLight = (current) => { // distractor

describe('updateLight', () => {
  it('should change green to yellow', () => {
    expect(updateLight('green')).toBe('yellow');
  });

  it('should change yellow to red', () => {
    expect(updateLight('yellow')).toBe('red');
  });

  it('should change red to green', () => {
    expect(updateLight('red')).toBe('green');
  });
});
