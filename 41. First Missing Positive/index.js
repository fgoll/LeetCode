/**
 * 41. First Missing Positive
 * 
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 * Example 1:
 *  Input: [1,2,0]
 *  Output: 3
 * 
 * Example 2:
 *  Input: [3,4,-1,1]
 *  Output: 2
 * 
 * Example 3:
 *  Input: [7,8,9,11,12]
 *  Output: 1
 * 
 * Note:
 *  Your algorithm should run in O(n) time and uses constant extra space.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums || nums.length === 0) return 1;


  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] <= 0) {
      nums[i] = Number.MAX_VALUE
    }
  }

  // 若某个数字num不在数组中便不会将 索引值为 num-1 的数字设为负数
  // 超过nums.length 的数字不用考虑 [5 2 3 4] 若有空 该数必然小于 5
  for (let i = 0; i < nums.length; i ++) {
    let num = Math.abs(nums[i])
    if (num <= nums.length) {
      nums[num-1] = -Math.abs(nums[num-1])
    }
  }

  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] > 0) return i + 1
  }
  return nums.length + 1
};