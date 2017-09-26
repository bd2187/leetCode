/*
Determine whether an integer is a palindrome. Do this without extra space.
*/

function isPalindrome(x) {
  var numberArray = x.toString().split('');

  /*
    check if number is negative. if negative, slice negative sign off of array
  */

  if (numberArray[0] === '-') {
    let reversedNumber = Number(numberArray.slice(1).reverse().join(''));
    return Number(numberArray.join('')) === reversedNumber;
  }

  /*
    if number is positive, reverse and join numberArray and check if strictly equal to x
  */

  return Number(numberArray.reverse().join('')) === x;
}

console.log(isPalindrome(-2147483648));
console.log(isPalindrome(323));
