/**
 * 309. Best Time to Buy and Sell Stock with Cooldown
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 */

 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0
  let buy = [...Array(prices.length)].map(_ => 0)
  let sell = [...Array(prices.length)].map(_ => 0)
  let cool = [...Array(prices.length)].map(_ => 0)

  buy[0] = -prices[0]


  for (let i = 1; i < prices.length; i ++) {
    buy[i] = Math.max(cool[i-1]-prices[i], buy[i-1])
    sell[i] = Math.max(buy[i-1]+prices[i], sell[i-1])
    cool[i] = sell[i-1]
  }

  return sell[prices.length - 1]
};



