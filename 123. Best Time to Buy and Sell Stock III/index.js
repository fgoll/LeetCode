/**
 * 123. Best Time to Buy and Sell Stock III
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 */

/**
 * Here, the oneBuy keeps track of the lowest price, and oneBuyOneSell keeps track of the biggest profit we could get.
 * 
 * Then the tricky part comes, how to handle the twoBuy? Suppose in real life, you have bought and sold a stock and made $100 dollar profit. 
 * When you want to purchase a stock which costs you $300 dollars, how would you think this? You must think, um, I have made $100 profit, 
 * so I think this $300 dollar stock is worth $200 FOR ME since I have hold $100 for free.
 * 
 * There we go, you got the idea how we calculate twoBuy!! We just minimize the cost again!! The twoBuyTwoSell is just making as much profit as possible.
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let oneBuyOneSell = 0
    let twoBuyTwoSell = 0
    let oneBuy = Number.POSITIVE_INFINITY
    let twoBuy = Number.POSITIVE_INFINITY

    for (let i = 0, l = prices.length; i < l; i ++) {
      let p = prices[i]
      oneBuy = Math.min(oneBuy, p)
      oneBuyOneSell = Math.max(oneBuyOneSell, p - oneBuy)
      twoBuy = Math.min(twoBuy, p - oneBuyOneSell)
      twoBuyTwoSell = Math.max(twoBuyTwoSell, p - twoBuy)
    }

    return twoBuyTwoSell
};