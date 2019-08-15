/**
 * 191. Number of 1 Bits
 * 
 * https://leetcode.com/problems/number-of-1-bits/
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0
  while (n !== 0) {
    sum ++ 
    n = n & (n - 1)
  }
  return sum
};