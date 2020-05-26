/**
 * 395. Longest Substring with At Least K Repeating Characters
 * 
 * Find the length of the longest substring T of a given string (consists of lowercase letters only) 
 * such that every character in T appears no less than k times.
 * 
 * Example 1:
 *  Input:
 *  s = "aaabb", k = 3
 *  Output:
 *  3
 *  The longest substring is "aaa", as 'a' is repeated 3 times.
 * 
 * Example 2:
 *  Input:
 *  s = "ababbc", k = 2
 *  Output:
 *  5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let counts = [...Array(26)].map(_ => 0)

  let i, j, max = 0, unique, noLessThanK

  for (let h = 1; h <= 26; h ++) {
    i = 0
    j = 0
    unique = 0
    noLessThanK = 0
    while (j < s.length) {
      if (unique <= h) {
        idx = s[j].charCodeAt(0) - 'a'.charCodeAt(0)
        if (counts[idx] === 0) {
          unique ++
        }
        counts[idx] ++
        if (counts[idx] === k) {
          noLessThanK ++
        } 
        j ++
      } else {
        idx = s[j].charCodeAt(0) - 'a'.charCodeAt(0)
        if (counts[idx] === k) {
          noLessThanK --
        }
        counts[idx] --
        if (counts[idx] === 0) {
          unique --
        }
        i ++
      }
      if (unique === h && unique === noLessThanK) {
        max = Math.max(j - i, max)
      }
    }
  }

  return max
};