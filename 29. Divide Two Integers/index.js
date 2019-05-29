/**
 * 29. Divide Two Integers
 * 
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero.
 * 
 * Example 1:
 *  Input: dividend = 10, divisor = 3
 *  Output: 3
 *  
 * Example 2:
 *  Input: dividend = 7, divisor = -3
 *  Output: -2
 * 
 * Note:
 *  Both dividend and divisor will be 32-bit signed integers.
 *  The divisor will never be 0.
 *  Assume we are dealing with an environment which could only store integers within the 32-bit signed 
 * integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 2^31 − 1 
 * when the division result overflows.
 */

 /**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = 1
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = -1
  }
  
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  if (dividend < divisor || dividend === 0) return 0

  let res = helper(dividend, divisor) 
  if (res > 2147483647) {
    if (sign === 1) return 2147483647
    return -2147483648
  }else {
    res = res * sign
  }

  return res
};

function helper(dividend, divisor) {
  if (dividend < divisor) return 0

  let sum = divisor
  let multiple = 1

  while ((sum + sum) <= dividend) {
    sum += sum
    multiple += multiple
  }
  return multiple + helper(dividend - sum, divisor)
}