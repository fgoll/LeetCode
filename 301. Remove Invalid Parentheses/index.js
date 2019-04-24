/**
 * 301. Remove Invalid Parentheses
 * 
 * Remove the minimum number of invalid parentheses in order to make the input string valid. 
 * Return all possible results.
 * 
 * Note: The input string may contain letters other than the parentheses ( and ).
 * 
 * Example 1:
 *  Input: "()())()"
 *  Output: ["()()()", "(())()"]
 *  
 * Example 2:
 *  Input: "(a)())()"
 *  Output: ["(a)()()", "(a())()"]
 * 
 * Example 3:
 *  Input: ")(" 
 *  Output: [""]
 */

 /**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let l = 0, r = 0

  for (let ch of s) {
    l += (ch === '(') 
    if (l === 0) {
      r += (ch === ')')
    }else {
      l -= (ch === ')')
    }
  }

  let res = []

  function isValid(s) {
    let count = 0
    for (let ch of s) {
      if (ch === '(') ++count
      if (ch === ')') --count
      if (count < 0) return false
    }
    return count === 0
  }

  function dfs(s, start, l, r) {
    if (l === 0 && r === 0) {
      if (isValid(s)) res.push(s)
      return
    }

    for (let i = start; i < s.length; i ++) {
      if (i !== start && s[i] === s[i - 1]) continue
      let curr = s.substring(0, i) + s.substring(i + 1, s.length - 1)
        
      if (s[i] === ')' && r > 0) {
        dfs(curr, i, l, r - 1)
      }else if (s[i] === '(' && l > 0) {
        dfs(curr, i, l - 1, r)
      }
      if (s[i] === ')' || s[i] === '(') {
        if (r > 0) {
          dfs(curr, i, l, r - 1)
        }else if (l > 0) {
          dfs(curr, i, l - 1, r)
        }
      }
    }
  }
  
  dfs(s, 0, l, r)
  return res
};