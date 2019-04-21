/**
 * 279. Perfect Squares
 * 
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 * 
 * Example 1:
 *  Input: n = 12
 *  Output: 3 
 *  Explanation: 12 = 4 + 4 + 4.
 * 
 * Example 2:
 *  Input: n = 13
 *  Output: 2
 *  Explanation: 13 = 4 + 9.
 */

 /**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = []
  dp[0] = 0

  for (let i = 1; i <= n; i ++) {
    let temp = Number.MAX_VALUE
    let j = 1
    while (i - j * j >= 0) {
      temp = Math.min(temp, dp[i - j * j])
    }
    dp[i] = temp
  }

  return dp[n]
};