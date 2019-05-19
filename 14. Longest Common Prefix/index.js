/**
 * 14. Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *  
 * Example 1:
 *  Input: ["flower","flow","flight"]
 *  Output: "fl"
 *  
 * Example 2:
 *  Input: ["dog","racecar","car"]
 *  Output: ""
 *  Explanation: There is no common prefix among the input strings.
 * 
 * Note:
 *  All given inputs are in lowercase letters a-z.
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return ''

  let res = strs[0]
  for (let i = 1; i < strs.length; i ++) {
    while(strs[i].indexOf(res) !== 0) {
      res = res.substring(0, res.length - 1)
    }
  }
  return res
};