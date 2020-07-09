/**
 * 410. Split Array Largest Sum
 * 
 * Given an array which consists of non-negative integers and an integer m, 
 * you can split the array into m non-empty continuous subarrays. 
 * Write an algorithm to minimize the largest sum among these m subarrays.
 * 
 * Note:
 *  If n is the length of array, assume the following constraints are satisfied:
 *    1 ≤ n ≤ 1000
 *    1 ≤ m ≤ min(50, n)
 * 
 * Examples:
 *  Input:
 *  nums = [7,2,5,10,8]
 *  m = 2
 *  Output:
 *  18
 * 
 * Explanation:
 *  There are four ways to split nums into two subarrays.
 *  The best way is to split it into [7,2,5] and [10,8],
 *  where the largest sum among the two subarrays is only 18.
 */

/**
 * 
 * 首先我们把 f[i][j] 定义为将 nums[0..i] 分成 j 份时能得到的最小的分割子数组最大值。
 * 
 * 对于第 j 个子数组，它为数组中下标 k + 1 到 i 的这一段。因此，f[i][j] 可以从 
 * max(f[k][j - 1], nums[k + 1] + ... + nums[i]) 这个公式中得到。遍历所有可能的 k，会得到 f[i][j] 的最小值。
 * 
 * 整个算法那的最终答案为 f[n][m]，其中 n 为数组大小。
 * 
 * 
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let n = nums.length
  
  let f = [...Array(n+1)].map(_ => [...Array(m+1)].map(_ => Number.MAX_VALUE))

  let sub = [0]

  for (let i = 0; i < n; i ++) {
    sub[i + 1] = sub[i] + nums[i]
  }

  f[0][0] = 0;
  for (let i = 1; i <= n; i ++) {
    for (let j = 1; j <= m; j ++) {
      for (let k = 0; k < i; k ++) {
        f[i][j] = Math.min(f[i][j], Math.max(f[k][j-1], sub[i] - sub[k]))
      }
    }
  }
  return f[n][m]
};