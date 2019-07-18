/**
 * 97. Interleaving String
 * 
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
 * 
 * Example 1:
 *  Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 *  Output: true
 * 
 * Example 2:
 *  Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 *  Output: false
 */

/**
 * dp[i][j]dp[i][j] 表示用 s1 的前 (i+1) 和 s2 的前 (j+1) 个字符
 * 
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false
  let dp = [...Array(s1.length + 1)].map(_ => [...Array(s2.length + 1)].map(_ => false))
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]
      } else {
        dp[i][j] = (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) || (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1])
      }
    }
  }

  return dp[s1.length][s2.length]
};