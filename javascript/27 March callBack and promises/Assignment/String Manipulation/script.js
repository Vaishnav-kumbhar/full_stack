function manupulateString(str, fn) {
  let manupulateString = str.toUpperCase();
  return fn(manupulateString);
}

function logString(str) {
console.log(`The manipulated string is: ${str}`);
}

manupulateString("hello, world!", logString);
// Expected Output: The manupulated string is: HELLO, WORLD!

