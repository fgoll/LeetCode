/**
 * 416. Partition Equal Subset Sum
 * 
 * Given a non-empty array containing only positive integers, 
 * find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 * 
 * Note:
 *  1. Each of the array element will not exceed 100.
 *  2. The array size will not exceed 200.
 * 
 * Example 1:
 *  Input: [1, 5, 11, 5]
 *  Output: true
 *  Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *  
 * Example 2:
 *  Input: [1, 2, 3, 5]
 *  Output: false
 *  Explanation: The array cannot be partitioned into equal sum subsets.
 */

 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0

  for (let num of nums) {
    sum += num
  }

  if ((sum & 1) === 1) return false

  sum /= 2

  let n = nums.length

  let dp = [...Array(n + 1)].map(_ => [...Array(sum + 1)].map(_ => false))

  dp[0][0] = true

  for (let i = 1; i <= n; i ++) {
    dp[i][0] = true
  }

  for (let j = 1; j <= sum; j ++) {
    dp[0][j] = false
  }

  for (let i = 1; i <= n; i ++) {
    for (let j = 1; j <= sum; j ++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= nums[i-1]) {
        dp[i][j] = dp[i][j] || dp[i-1][j-nums[i-1]]
      }
    }
  }

  console.log(dp)
  return dp[n][sum];
};

canPartition([1,5,11,5])