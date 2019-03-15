/**
 * 32. Longest Valid Parentheses
 * 
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 *  Input: "(()"
 *  Output: 2
 *  Explanation: The longest valid parentheses substring is "()"
 * 
 * Example 2:
 *  Input: ")()())"
 *  Output: 4
 *  Explanation: The longest valid parentheses substring is "()()"
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = []
  let maxl = l = 0
  stack.push(-1)
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === '(') {
     
      stack.push(i)
    }else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      }else {
        l = i - stack[stack.length - 1] 

        maxl = maxl > l ? maxl : l

      }
    }
  }

  return maxl 
};

//  use dp

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses2 = function(s) {
  let dp = []
  dp[-1] = 0
  for (let i = 0; i < s.length; i ++) {
    dp[i] = 0
  }
  let maxl = 0
  for (let i = 1; i < s.length; i ++) {
    if (s[i] === ')' && s[i - 1] === '(') {
      dp[i] = dp[i - 2] + 2
    }
    if (s[i] === ')' && s[i - 1] === ')') {
      if (s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
      }
    }

    maxl = maxl > dp[i] ? maxl : dp[i]
  }

  return maxl
}

// console.log(longestValidParentheses2("())()())"))
console.log(longestValidParentheses2("())((())"))
