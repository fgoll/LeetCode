/**
 * 13. Roman to Integer
 * 
 * https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (!s) return 0
  let res = toNumber(s[0])
  for (let i = 1; i < s.length; i++) {
    if (toNumber(s[i]) > toNumber(s[i - 1])) {
      res += toNumber(s[i]) - 2 * toNumber(s[i - 1])
    } else {
      res += toNumber(s[i])
    }
  }
  return res;
};

function toNumber(c) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  return map[c]
}