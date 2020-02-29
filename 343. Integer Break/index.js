/**
 * 343. Integer Break
 * 
 * Given a positive integer n, break it into the sum of at least two positive 
 * integers and maximize the product of those integers. Return the maximum product you can get.
 * 
 * Example 1:
 *  Input: 2
 *  Output: 1
 *  Explanation: 2 = 1 + 1, 1 × 1 = 1.
 * 
 * Example 2:
 *  Input: 10
 *  Output: 36
 *  Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 * 
 * Note: You may assume that n is not less than 2 and not larger than 58.
 */

/**
 * If an optimal product contains a factor f >= 4, then you can replace it with factors 2 and f-2 without losing optimality, 
 * as 2*(f-2) = 2f-4 >= f. So you never need a factor greater than or equal to 4, 
 * meaning you only need factors 1, 2 and 3 (and 1 is of course wasteful and you'd only use it for n=2 and n=3, where it's needed).
 * 
 * For the rest I agree, 3*3 is simply better than 2*2*2, so you'd never use 2 more than twice.
 * 
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n === 2) return 1
  else if (n === 3) return 2

  let product = 1
  while (n > 4) {
    product *= 3
    n -= 3
  }

  product *= n
  return product
};