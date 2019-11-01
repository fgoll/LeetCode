/**
 * 227. Basic Calculator II
 * 
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string contains only non-negative integers, +, -, *, / operators 
 * and empty spaces . The integer division should truncate toward zero.
 * 
 * Example 1:
 *  Input: "3+2*2"
 *  Output: 7
 * 
 * Example 2:
 *  Input: " 3/2 "
 *  Output: 1
 * 
 * Example 3:
 *  Input: " 3+5 / 2 "
 *  Output: 5
 * 
 * Note:
 *  You may assume that the given expression is always valid.
 *  Do not use the eval built-in library function.
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s += '+' // 处理最后一步
  let stack = []
  let num = 0
  let sign = '+'
  for (let i = 0; i < s.length; i ++) {
    let isSpace = s[i] === ' '
    let isDigit = !isNaN(+s[i]) && !isSpace

    if (isDigit) {
      num = num * 10 + (+s[i])
    } else if (!isSpace) {
      if (sign === '-') {
        stack.push(-num)
      } else if (sign === '+') {
        stack.push(num)
      } else if (sign === '*') {
        stack.push(stack.pop() * num)
      } else {
        // 处理负数
        let n = stack.pop() / num
        let s = Math.sign(n)
        n = s * Math.floor(n * s)
        stack.push(n)
      }
      sign = s[i]
      num = 0
    }
  }

  let sum = stack.reduce((prev, curr) => prev + curr, 0)
  return sum
};