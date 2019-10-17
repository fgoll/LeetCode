/**
 * 213. House Robber II
 * 
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed. All houses at this place are 
 * arranged in a circle. That means the first house is the neighbor of the last one. 
 * Meanwhile, adjacent houses have security system connected and it will automatically 
 * contact the police if two adjacent houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of each house, 
 * determine the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Example 1:
 *  Input: [2,3,2]
 *  Output: 3
 *  Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
 *               because they are adjacent houses.
 * 
 * Example 2:
 *  Input: [1,2,3,1]
 *  Output: 4
 *  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *               Total amount you can rob = 1 + 3 = 4.
 */

/**
 * 
 * 数组是个环，也就是说偷第一家，最后一家就不能偷；偷最后一家，第一家就不能偷。
 * 
 * 所以，我们问题分成求 nums[0:n - 1]或者 nums[1:n]
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  
  function helper(nums) {
    if (!nums || nums.length === 0) return 0
    let dp = new Array(nums.length + 1)
  
    dp[0] = 0
    dp[1] = nums[0]
  
    for (let i = 2; i <= nums.length; i ++) {  
      dp[i] = Math.max(dp[i - 1], dp[i-2] + nums[i-1])
    }
  
    return dp[nums.length]
  }

  return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)))
};