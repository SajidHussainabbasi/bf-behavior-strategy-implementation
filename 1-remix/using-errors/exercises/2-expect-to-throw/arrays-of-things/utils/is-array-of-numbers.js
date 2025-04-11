/**
 *
 * @param {*} array
 * @returns {boolean} true if array contains only numbers
 */
export const isArrayOfNumbers = (array = []) => {
  return (
    Array.isArray(array) &&
    array.every((item) => typeof item === 'number' && Number.isFinite(item))
  );
};
