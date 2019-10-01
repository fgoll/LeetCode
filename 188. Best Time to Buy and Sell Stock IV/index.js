/**
 * 188. Best Time to Buy and Sell Stock IV
 * 
 * Say you have an array for which the i-th element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most k transactions.
 * 
 * Note:
 *  You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * 
 * Example 1:
 *  Input: [2,4,1], k = 2
 *  Output: 2
 *  Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
 * 
 * Example 2:
 *  Input: [3,2,6,5,0,3], k = 2
 *  Output: 7
 *  Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
 *               Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let n = prices.length
  if (n <= 1) return 0

  if (k >= (n >> 1)) {
    let maxPro = 0
    for (let i = 1; i < n; i ++) {
      if (prices[i] > prices[i-1]) {
        maxPro += prices[i] - prices[i-1]
      }
     
    }
    return maxPro
  }

  let dp = [...Array(k+1)].map(_ => [...Array(n)].map(_ => 0))

  for (let i = 1; i <= k; i ++) {
    let localMax = dp[i-1][0] - prices[0]

    for (let j = 1; j < n; j ++) {
      dp[i][j] = Math.max(dp[i][j-1], prices[j] + localMax)
      localMax = Math.max(localMax, dp[i-1][j] - prices[j])
    }
  }

  return dp[k][n-1]
};