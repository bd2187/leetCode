/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

*/

const reverseWords = str => str.split(' ').reverse().join(' ');
console.log(reverseWords('the sky is blue'));
