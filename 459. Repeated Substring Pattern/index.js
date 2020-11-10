/**
 * 459. Repeated Substring Pattern
 * 
 * https://leetcode.com/problems/repeated-substring-pattern/
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
 
  function divide(m) {
     
    if (m > s.length) return false
    let w = s.substr(0, s.length / m)
    return w.repeat(m) === s || divide(m + 1)
  }

  return divide(2)
};