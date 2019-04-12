/**
 * 198. House Robber
 * 
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, 
 * the only constraint stopping you from robbing each of them is that adjacent houses have security system connected 
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of each house, 
 * determine the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Example 1:
 *  Input: [1,2,3,1]
 *  Output: 4
 *  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *               Total amount you can rob = 1 + 3 = 4.
 * Example 2:
 *  Input: [2,7,9,3,1]
 *  Output: 12  
 *  Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *               Total amount you can rob = 2 + 9 + 1 = 12.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length === 0) return 0
  else if (nums.length === 1) return nums[0]
  else if (nums.length === 2) return Math.max(nums[0], nums[1])
    
  let dp = new Array(nums.length)

  dp[0] = nums[0]
  dp[1] = nums[1]

  for (let i = 2; i < nums.length; i ++) {  
    dp[i] = Math.max(dp[i - 1], dp[i-2] + nums[i])
    if (i >= 3) {
      dp[i] = Math.max(dp[i], dp[i-3] + nums[i])
    }
  }

  return dp[nums.length - 1]
}; 


var rob2 = function(nums) {
  if (!nums || nums.length === 0) return 0
  let dp = new Array(nums.length + 1)

  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i <= nums.length; i ++) {  
    dp[i] = Math.max(dp[i - 1], dp[i-2] + nums[i-1])
  }

  return dp[nums.length]
}; 