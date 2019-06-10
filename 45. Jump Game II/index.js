/**
 * 45. Jump Game II
 * 
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 *  Input: [2,3,1,1,4]
 *  Output: 2
 *  Explanation: The minimum number of jumps to reach the last index is 2.
 *               Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 *  You can assume that you can always reach the last index.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!nums || nums.length <= 1) return 0

  let dp = [...Array(nums.length)].map(_ => 0)

  for (let i = 0; i < nums.length; i ++) {
    for (let j = nums[i]; j > 0; j --) {
      if (i + j >= nums.length - 1) return dp[i] + 1
      else if (dp[i + j] === 0) {
        dp[i + j] = dp[i] + 1
      }else {
        break
      }
    }
  }
  return 0
};

/**
* @param {number[]} nums
* @return {number}
*/
var jump = function(nums) {
 
  let jumps = 0, curEnd = 0, curFarthest = 0

  for (let i = 0; i < nums.length - 1; i ++) {
    curFarthest = Math.max(curFarthest, i + nums[i])
    if (i === curEnd) {
      jumps ++
      curEnd = curFarthest
    }
  }

  return jumps
};