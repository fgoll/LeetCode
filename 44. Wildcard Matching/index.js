/**
 * 44. Wildcard Matching
 * 
 * https://leetcode.com/problems/wildcard-matching/
 */

 /**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let si = 0
  let pi = 0
  let star = -1
  let match = 0

  while (si < s.length) {
    if (pi < p.length && (s[si] === p[pi] || p[pi] === '?')) {
      si++
      pi++
    }else if (pi < p.length && p[pi] === '*') {
      star = pi
      match = si
      pi ++
    }else if (star != -1) {
      pi = star + 1
      match ++
      si = match
    }else {
      return false
    }
  }

  while (pi < p.length && p[pi] === '*') {
    pi ++
  }
  return pi === p.length

};