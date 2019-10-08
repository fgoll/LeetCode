/**
 * 202. Happy Number
 * 
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with any positive integer, 
 * replace the number by the sum of the squares of its digits, and repeat the process until the number 
 * equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
 * Those numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 *  Input: 19
 *  Output: true
 *  Explanation: 
 *    1^2 + 9^2 = 82
 *    8^2 + 2^2 = 68
 *    6^2 + 8^2 = 100
 *    1^2 + 0^2 + 0^2 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let [slow, fast] = [n, n]

  do {
    slow = squareSum(slow)
    fast = squareSum(fast)
    fast = squareSum(fast)
  } while (slow !== fast)

  if (slow === 1) return true
  return false
};

function squareSum(n) {
  let sum = 0, tmp 
  while (n) {
    tmp = n % 10
    sum += tmp * tmp
    n = Math.floor(n / 10)
  }

  return sum
}