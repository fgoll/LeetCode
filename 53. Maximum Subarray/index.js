/**
 * 53. Maximum Subarray
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let end = nums.length - 1
  let maxsum
  let sum = 0
  for (let index = end; index >= 0; index--) {
    sum += nums[index]
    if (maxsum === undefined || maxsum < sum) {
      maxsum = sum
    }
    if (sum < 0) {
      sum = 0
    }
    
  }
  return maxsum
};

console.log(maxSubArray([-2, -1]))