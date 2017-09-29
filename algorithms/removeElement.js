/*
Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
*/

var removeElement = function(nums, val) {
  return nums.filter(number => {
    return number !== val ? number : null;
  });
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([45, 22, 21, 45, 45, 45, 10, 11], 45));
