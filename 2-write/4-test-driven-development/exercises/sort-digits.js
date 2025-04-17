/**
 * Creates a new number by sorting the digits in another.
 *  It will sort the digits up or down, depending on a flag parameter.
 *
 * @param {number} [toSort=0] - The number who's digits need sorting.
 * @param {boolean} [up=true] - Whether to sort the digits up or down.
 * @return {number} A number with the same digits, but sorted.
 *
 * @example
 *
 * sortDigits(2321); // 1223
 *
 * @example
 *
 * sortDigits(2321, true); // 1223
 *
 * @example
 *
 * sortDigits(2321, false); // 3221
 */

export const sortDigits = (n = 0, up = true) =>
  +String(n)
    .split('')
    .sort(up ? undefined : (a, b) => b - a)
    .join('');

console.log(sortDigits(2321, true)); // 1223
console.log(sortDigits(2321, false)); // 3221
