/**
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 *    '.' Matches any single character.
 *    '*' Matches zero or more of the preceding element.
 * 
 * The matching should cover the entire input string (not partial).
 * Note:
 *    s could be empty and contains only lowercase letters a-z.
 *    p could be empty and contains only lowercase letters a-z, and characters like . or *.
 */

 /**
  * 
  * dp[i][j] 含义为 s[0-i) 与 p[0-j)是否匹配
  * 
  * 1. if p[j] === s[i] :  dp[i+1][j+1] = dp[i][j]
  * 2. if p[j] === '.'  :  dp[i+1][j+1] = dp[i][j]
  * 3. if p[j] === '*'  : 
  *    1. if p[j-1] != s[i] : dp[i+1][j+1] = dp[i+1][j-1]  'bbaa' 与 'ba*baa'  p[2] === '*' && p[2] != s[1]  所以 dp[3][3] = dp[1][1] 等价于忽略 a*
  *    2. if p[j-1] === s[i] or p[j-1] === '.' : 
  *       dp[i+1][j+1] =    dp[i+1][j]    // a* count as single a
  *                      || dp[i][j+1]    // a* count as multiple a
  *                      || dp[i+1][j-1]  // a* count as empty
  * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  let dp = []
  for (let i = 0; i <= s.length; i ++) {
    dp[i] = []
  }
  dp[0][0] = true

  // 处理 'abc'与'c*abc' 的情况
  for (let i = 0; i < p.length; i ++) {
    if (p[i] === '*' && dp[0][i - 1]) {
      dp[0][i + 1] = true
    }
  }

  for (let i = 0; i < s.length; i ++) {
    for (let j = 0; j < p.length; j ++) {
      if (p[j] === s[i]) {
        dp[i + 1][j + 1] = dp[i][j]
      }
      if (p[j] === '.') {
        dp[i + 1][j + 1] = dp[i][j]
      }
      if (p[j] === '*') {
        if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1]
        }else {
          dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1])
        }
      }
    }
  }

  return !!dp[s.length][p.length]
};

"mississippi"
"mis*is*ip*."
// console.log(isMatch('aaa', 'a*a'))
// console.log(isMatch('abccd', 'abc*d'))

console.log(isMatch('baa', 'a*baa'))
console.log(isMatch('aaa', 'a*'))