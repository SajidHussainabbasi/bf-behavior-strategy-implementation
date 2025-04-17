/**
 * Checks if the braces in a string are matched.
 *
 * @param {string} [text=''] - The text of braces to check.
 * @returns {boolean} Whether or not the braces are matched.
 *
 * @example
 *
 * matchingBraces('['); // false
 *
 * @example
 *
 * matchingBraces('()'); // true
 *
 * @example
 *
 * matchingBraces('(]'); // false
 *
 * @example
 *
 * matchingBraces('{[]}'); // true
 *
 * @example
 *
 * matchingBraces('([)]'); // false
 *
 * @example
 *
 * matchingBraces('()[]{}'); // true
 *
 */

export const matchingBraces = (text = '') => {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of text) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else if ([')', ']', '}'].includes(char)) {
      const last = stack.pop();
      if (last !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log('[', matchingBraces('[')); // false

console.log('()', matchingBraces('()')); // true

console.log('(]', matchingBraces('(]')); // false

console.log('{[]}', matchingBraces('{[]}')); // true

console.log('([)]', matchingBraces('([)]')); // false

console.log('()[]{}', matchingBraces('()[]{}')); // true
