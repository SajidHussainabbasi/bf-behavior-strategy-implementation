'use strict';

console.log('- broken JS -');
try {
  const stringVariable = 'hello!';
  stringVariable();
} catch (err) {
  console.error(err);
}

console.log('- throw new error -');
try {
  throw new TypeError('stringVariable is not a function'); //
} catch (err) {
  console.error(err);

  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(
    err.message === 'stringVariable is not a function',
    'message fail',
  );
}
