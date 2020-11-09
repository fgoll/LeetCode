/**
 * 456. 132 Pattern
 * 
 * https://leetcode.com/problems/132-pattern/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  
  let min = Number.MAX_VALUE

  for (let j = 0; j < nums.length - 1; j ++) {

    min = Math.min(min, nums[j])

    for (let k = j + 1; k < nums.length; k ++) {
      if (nums[k] < nums[j] && min < nums[k]) {
        return true
      }
    }
  }

  return false
};