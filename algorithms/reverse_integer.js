/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/

function reverseInteger(x) {
  var numberArray = x.toString().split('');

  if (x >= Number.MAX_SAFE_INTEGER) {
    return 0;
  }

  if (numberArray[0] === '-') {
    return Number(`-${numberArray.slice(1).reverse().join('')}`);
  }

  return Number(numberArray.reverse().join(''));
}

console.log(reverseInteger(-123));
console.log(reverseInteger(123));
console.log(reverseInteger(-2143847412));
console.log(reverseInteger(1534236469));
