/**
 * 424. Longest Repeating Character Replacement
 * 
 * Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
 * In one operation, you can choose any character of the string and change it to any other uppercase English character.
 * Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.
 * 
 * Note:
 *  Both the string's length and k will not exceed 104.
 * 
 * Example 1:
 *  Input:
 *    s = "ABAB", k = 2
 *  Output:
 *    4
 *  Explanation:
 *    Replace the two 'A's with two 'B's or vice versa.
 *  
 * Example 2:
 *  Input:
 *    s = "AABABBA", k = 1
 *  Output:
 *    4
 *  Explanation:
 *    Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 *    The substring "BBBB" has the longest repeating letters, which is 4.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  
  let count = [...Array(26)].map(_ => 0)
  let start = 0
  let maxCount = 0
  const codeIndex = (c) => c.charCodeAt(0) - 'A'.charCodeAt(0)
  for (let end = 0; end < s.length; end ++) {
    maxCount = Math.max(maxCount, ++count[codeIndex(s[end])])
      console.log(start, end, maxCount)
    if (end - start + 1 - maxCount > k) {
      count[codeIndex(s[start++])]--
    }
  }
  return s.length - start
};