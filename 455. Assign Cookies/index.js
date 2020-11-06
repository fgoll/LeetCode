/**
 * 455. Assign Cookies
 * 
 * https://leetcode.com/problems/assign-cookies/
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let j = 0
  let max = g.length
  for (let i = 0; i < s.length; i ++) {
    if (g[j] <= s[i] && j < max) {
      j ++ 
    }
  }

  return j
};