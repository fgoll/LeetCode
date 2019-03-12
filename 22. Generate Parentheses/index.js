/**
 * 22. Generate Parentheses
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  function backtrack(s, left, right) {
    if (left > right) {
      return 
    }

    if (left === 0 && right === 0) {
      res.push(s)
      return
    }

    if (left > 0) {
      backtrack(s + '(', left - 1, right) 
    }
    if (right > 0) {
      backtrack(s + ')', left, right - 1)
    }
  }

  backtrack('', n, n)

  return res
};

console.log(generateParenthesis(3))