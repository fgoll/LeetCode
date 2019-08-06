/**
 * 122. Best Time to Buy and Sell Stock II
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0

  for (let i = 1, l = prices.length; i < l; i ++) {
    if (prices[i] > prices[i-1]) {
      max += prices[i] - prices[i-1]
    }
  }

  return max
};