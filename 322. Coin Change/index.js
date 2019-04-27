/**
 * 322. Coin Change
 * 
 * You are given coins of different denominations and a total amount of money amount. 
 * Write a function to compute the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * 
 * Example 1:
 *  Input: coins = [1, 2, 5], amount = 11
 *  Output: 3 
 *  Explanation: 11 = 5 + 5 + 1
 * 
 * Example 2:
 *  Input: coins = [2], amount = 3
 *  Output: -1
 * 
 * Note:
 *  You may assume that you have an infinite number of each kind of coin.
 */

 /**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let memory = []
  function helper(coins, rem, memory) {
    if (rem === 0) return 0
    if (rem < 0) return -1

    if (memory[rem] !== undefined) return memory[rem] 

    let min = Number.MAX_VALUE
    for (let coin of coins) {
      let count = helper(coins, rem - coin, memory)
      if (count >= 0 && count < min) {
        min = count + 1
      }
    }
    memory[rem] = (min === Number.MAX_VALUE) ? -1 : min
    return memory[rem]
  }

  if (amount < 1) return 0
  return helper(coins, amount, memory)
};

 /**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  
  let dp = [...Array(amount + 1)].map(_ => amount + 1)

  dp[0] = 0

  for (let i = 1; i <= amount; i ++) {
    for (let j = 0; j < coins.length; j ++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
};