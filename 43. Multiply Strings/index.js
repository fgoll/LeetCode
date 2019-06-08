/**
 * 43. Multiply Strings
 * 
 * Given two non-negative integers num1 and num2 represented as strings, 
 * return the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 *  Input: num1 = "2", num2 = "3"
 *  Output: "6"
 * 
 * Example 2:
 *  Input: num1 = "123", num2 = "456"
 *  Output: "56088"
 * 
 * Note:
 *  The length of both num1 and num2 is < 110.
 *  Both num1 and num2 contain only digits 0-9.
 *  Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 *  You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (!num1 || !num2) return '0'

  let zero = '0'.charCodeAt(0)

  let digits = Array(num1.length + num2.length)

  for (let i = num1.length - 1; i >= 0; i --) {
    for (let j = num2.length - 1; j >= 0; j --) {
      let product = (num1.charCodeAt(i) - zero) * (num2.charCodeAt(j) - zero)

      let p1 = i + j, p2 = i + j + 1

      let sum = digits[p2] + product
      digits[p2] += Math.floor(sum / 10)
      digits[p1] += sum % 10
    }
  }

  let res = ''

  for (let i = 0; i < digits.length; i ++) {
    if (res.length !== 0 && digits[i] !== 0) {
      res += digits[i]
    }
  }

  return res.length === 0 ? '0' : res
};