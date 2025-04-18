/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 *
 * @author https://github.com/andrewborisov/javascript-practice/blob/master/objects/solutions/09-intersection.js
 */
export const solution = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }

    return acc;
  }, {});
};

export const args = (chance) => {
  const first = {};
  const second = {};

  const maxKeys = Math.floor(Math.random() * 15);
  for (let i = 0; i < maxKeys; i++) {
    const key = chance.word();

    const value = chance.integer({ min: -999, max: 999 });
    const rando = Math.random();
    if (rando < 0.2) {
      first[key] = value;
    } else if (rando < 0.4) {
      second[key] = value;
    } else if (rando < 0.8) {
      first[key] = value;
      second[key] = chance.integer({ min: -999, max: 999 });
    } else {
      first[key] = value;
      second[key] = value;
    }
  }

  return [first, second];
};

//.....Tests.......

describe('solution - finds shallow intersections of objects', () => {
  it('returns the shallow intersection of two objects', () => {
    const firstObj = { a: 1, b: 2, c: 3 };
    const secondObj = { b: 2, c: 4, d: 5 };
    const result = solution(firstObj, secondObj);
    expect(result).toEqual({ b: 2 });
  });

  it('returns an empty object when there is no intersection', () => {
    const firstObj = { a: 1, b: 2 };
    const secondObj = { c: 3, d: 4 };
    const result = solution(firstObj, secondObj);
    expect(result).toEqual({});
  });

  it('handles when both objects have identical values for some keys', () => {
    const firstObj = { a: 1, b: 2, c: 3 };
    const secondObj = { a: 1, b: 2, c: 3 };
    const result = solution(firstObj, secondObj);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });
});
