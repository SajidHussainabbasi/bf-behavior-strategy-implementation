'use strict';

console.log('- broken JS -');
let originalError;

try {
  let name;
  name.length;
} catch (err) {
  console.error(err);
  originalError = err;
}

console.log('- throw new error -');
try {
  throw new TypeError(originalError.message); // Match the original error exactly
} catch (err) {
  console.error(err);

  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(
    err.message === "Cannot read properties of undefined (reading 'length')",
    'message fail',
  );
}
