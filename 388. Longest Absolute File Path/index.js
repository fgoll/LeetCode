/**
 * 388. Longest Absolute File Path
 * 
 * https://leetcode.com/problems/longest-absolute-file-path/
 */

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  let paths = input.split('\n')  

  let stack = [...Array(paths.length + 1)].map(_ => 0)

  let maxLen = 0

  for (let s of paths) {
    let lev = s.lastIndexOf('\t') + 1
    let curLen = stack[lev + 1] = stack[lev] + s.length - lev + 1
    if (s.includes('.')) maxLen = Math.max(maxLen, curLen - 1)
  }

  return maxLen
};