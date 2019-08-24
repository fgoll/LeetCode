/**
 * 132. Palindrome Partitioning II
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * 
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 * Example:
 *  Input: "aab"
 *  Output: 1
 *  Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
 */

/**
 * [ x x x x ] [ j x i ]
 * 
 * dp[i] = min { dp[j-1] + 1 if s[j:i] is Pal for every j }
 * 
 * dp[i]: the minimum cuts needed for a palindrome partitioning of s[0:i]
 * 
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {

  let N = s.length
    
  let dp = [...Array(N)].map(_ => Number.MAX_VALUE)

  dp[-1] = 0

  let isPal = [...Array(N)].map(_ => [...Array(N)].map(_ => 0))

  for (let len = 1; len <= N; len ++) {
    for (let i = 0; i <= N - len; i ++) {
      let j = i + len - 1
      if (s[i] === s[j]) {
        if (i + 1 >= j - 1) {
          isPal[i][j] = true
        }else {
          isPal[i][j] = isPal[i+1][j-1]
        }
      }
    }
  }

  for (let i = 0; i < N; i ++) {
    for (let j = 0; j <= i; j ++) {
      if (isPal[j][i]) {
        dp[i] = Math.min(dp[j-1] + 1, dp[i])
      }
    }
  }


  function isPalindrome(l, r) {
    if (l === r) return true
    while (l < r) {
      if (s[l] !== s[r]) return false
      l ++
      r --
    }

    return true
  }

  return dp[N-1] - 1
};