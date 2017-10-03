/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/

var canJump = function(nums) {
  for (let i = 0; i < nums.length; i += nums[0]) {
    // If the index that is currently being iterated
    // over is strictly equal to the length of (nums - 1),
    // return true

    if (i === nums.length - 1) {
      return true;
    }
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 4, 4]));
