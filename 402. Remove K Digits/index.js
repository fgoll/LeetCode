/**
 * 402. Remove K Digits
 * 
 * Given a non-negative integer num represented as a string, 
 * remove k digits from the number so that the new number is the smallest possible.
 *  
 * Note:
 *  The length of num is less than 10002 and will be ≥ k.
 *  The given num does not contain any leading zero.
 * 
 * Example 1:
 *  Input: num = "1432219", k = 3
 *  Output: "1219"
 *  Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
 * 
 * Example 2:
 *  Input: num = "10200", k = 1
 *  Output: "200"
 *  Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 * 
 * Example 3:
 *  Input: num = "10", k = 2
 *  Output: "0"
 *  Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let len = num.length

  if (k === len) return '0'

  let i = 0
  let stack = []
  while (i < len) {
    while (k > 0 && stack.length && stack[stack.length-1] > num[i]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
    i ++
  }

  while (k > 0) {
    stack.pop()
    k --
  }

  let s = stack.join('')

  let from = s.length - 1
  for (let i = 0; i < s.length; i ++) {
    if (s[i] !== '0') {
      from = i 
      break
    }
  }

  return s.substr(from)
};