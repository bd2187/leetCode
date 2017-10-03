/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.
*/

var lengthOfLastWord = function(s) {
  const numbersArray = s.split(' ').map(word => {
    return word.length;
  });

  return Math.max(...numbersArray);
};

console.log(lengthOfLastWord('Today is a nice day'));
