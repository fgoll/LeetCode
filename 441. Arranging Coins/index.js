/**
 * 441. Arranging Coins
 * 
 * https://leetcode.com/problems/arranging-coins/
 */

/**
 * 
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return ~~(Math.sqrt(2 * n + 0.25) - 0.5)
};