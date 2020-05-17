/**
 * 387. First Unique Character in a String
 * 
 * Given a string, find the first non-repeating character in it and 
 * return it's index. If it doesn't exist, return -1.
 * 
 * Examples:
 *  s = "leetcode"
 *  return 0.
 * 
 *  s = "loveleetcode",
 *  return 2.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = {}
  for (let i = 0; i < s.length; i ++) {
    let count = map[s[i]] || 0 
    map[s[i]] = ++count
  }

  for (let i = 0; i < s.length; i ++) {
    if (map[s[i]] === 1) return i
  }

  return -1
};