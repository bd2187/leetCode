/*
  Find the contiguous subarray within an array (containing at least one number) which has the largest product.

  For example, given the array [2,3,-2,4],
  the contiguous subarray [2,3] has the largest product = 6.
*/

var maxProduct = function(nums) {
  /*
    Make an array that contains the product of contiguous numbers from nums array
  */
  var contiguousProducts = nums.reduce((obj, currentValue, index) => {
    // Multiply current value to value of next index
    var product = currentValue * nums[index + 1];

    // store product in object
    obj[product] = product;

    return obj;
  }, {});

  // NaN will be last value in every array. Delte NaN
  delete contiguousProducts.NaN;

  /*
    Create an array of values from the returned object and
    utilize Math.max to find largest number in array
  */
  return Math.max(...Object.values(contiguousProducts));
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([10, 3, 10, 40, 400, 22, 1, 50, 50]));
