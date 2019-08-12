/**
 * 115. Distinct Subsequences
 * 
 * https://leetcode.com/problems/distinct-subsequences/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let dp = [...Array(t.length+1)].map(_ => [...Array(s.length+1)])  

  for (let i = 0; i <= s.length; i ++) {
    dp[0][i] = 1
  }

  for (let i = 0; i <= t.length; i ++) {
    dp[i][0] = 0
  }

  for (let i = 1; i <= t.length; i ++) {
    for (let j = 1; j <= s.length; j ++) {
      if (t[i-1] === s[j-1]) {
        dp[i][j] = dp[i-1][j-1] + dp[i][j-1]
      }else {
        dp[i][j] = dp[i][j-1]
      }
    }
  }

  return dp[t.length][s.length]
};