/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

function removeDuplicates(nums = []) {
  var resultArray = []; // will hold values without duplicates

  // iterate over nums array

  nums.forEach(num => {
    // if resultArray doesn't include num, push num into resultArray, otherwise, return null

    return resultArray.indexOf(num) === -1 ? resultArray.push(num) : null;
  });

  return resultArray.length;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 2]));
console.log(removeDuplicates([1, 15, 2, 15, 2, 1]));
