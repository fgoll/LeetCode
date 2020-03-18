/**
 * 368. Largest Divisible Subset
 * 
 * Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:
 * 
 * Si % Sj = 0 or Sj % Si = 0.
 * 
 * If there are multiple solutions, return any subset is fine.
 * 
 * Example 1:
 *  Input: [1,2,3]
 *  Output: [1,2] (of course, [1,3] will also be ok)
 * 
 * Example 2:
 *  Input: [1,2,4,8]
 *  Output: [1,2,4,8]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b)  
  let len = nums.length
 
  let ret = []

  if (!len) return ret

  let dp = [...Array(len)].map(_ => 1) // dp[i] 表示第i个数在子集里最大解的个数
  let solution = [...Array(len)].map(_ => -1)
  let max = 0

  for (let i = 0; i < len; i ++) {
    for (let j = 0; j < i; j ++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        solution[i] = j;
      }
    }
    if (dp[i] > dp[max]) {
      max = i
    }
  }

  for (let i = max; i != -1; i = solution[i]) {
    ret.push(nums[i])
  }
  return ret
};