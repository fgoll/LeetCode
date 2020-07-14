/**
 * 413. Arithmetic Slices
 * 
 * https://leetcode.com/problems/arithmetic-slices/
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let dp = [...Array(A.length)].map(_ => 0)

  let sum = 0

  for (let i = 2; i < A.length; i ++) {
    if (A[i-1] - A[i-2] === A[i] - A[i-1]) {
      dp[i] = 1 + dp[i-1]
      sum += dp[i]
    }
  }

  return sum
};