/**
 * 415. Add Strings
 * 
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 * 
 * Note:
 *  The length of both num1 and num2 is < 5100.
 *  Both num1 and num2 contains only digits 0-9.
 *  Both num1 and num2 does not contain any leading zero.
 *  You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length-1, j = num2.length-1

  let res = []
  let carry = 0
  while (i >= 0 || j >= 0) {
    let x1 = num1[i] >= 0 ? +num1[i] : 0
    let x2 = num2[j] >= 0 ? +num2[j] : 0

    let val = (x1 + x2 + carry) % 10

    carry = Math.floor((x1 + x2 + carry) / 10)

    res.push(val)
    i --
    j -- 
  }
  if (carry !== 0) {
    res.push(carry)
  }
  return res.reverse().join('')
};