/**
 * 209. Minimum Size Subarray Sum
 * 
 * Given an array of n positive integers and a positive integer s, 
 * find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 * 
 * Example: 
 *  Input: s = 7, nums = [2,3,1,2,4,3]
 *  Output: 2
 *  Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 * 
 * Follow up:
 *  If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let n = nums.length
  let ans = Number.MAX_VALUE
  let left = 0
  let sum = 0

  for (let i = 0; i < n; i ++) {
    sum += nums[i]

    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left)
      sum -= nums[left++]
    }
  }

  return ans !== Number.MAX_VALUE ? ans : 0
};