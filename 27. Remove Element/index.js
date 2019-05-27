/**
 * 27. Remove Element
 * 
 * https://leetcode.com/problems/remove-element/
 */

 /**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let start = 0, end = 0

  while (end < nums.length) {
    if (nums[end] === val) {
      nums[start ++] = val
    }
    end ++
  }
  return start
};