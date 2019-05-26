/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let start = 0, end = 0
  while (end < nums.length) {
    if (nums[start] === nums[end]) {
      end ++
    }else {
      nums[++start] = nums[end]
    }
  }  

  return start + 1
};