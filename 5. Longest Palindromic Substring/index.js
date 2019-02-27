/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * 
 * Example 1:
 *    Input: "babad"
 *    Output: "bab"
 *    Note: "aba" is also a valid answer.
 * 
 * Example 2:
 *    Input: "cbbd"
 *    Output: "bb"
 */


// ========================   Time Limit Exceeded   =========================
 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0, end = 0

  for (let i = 0; i < s.length; i ++) {
    for (let j = i; j < s.length; j ++) {
      if (palindromic(s, i, j) && (j - i) > (end - start)) {
        start = i
        end = j
      }
    }
  }

  s = s.substring(start, end + 1)
  return s
};

function palindromic(s, i, j) {

  if (j < i) return false
  if (i === j) {
    return true
  } else if (i === j - 1) {
    return s[i] === s[j]
  }else {
    return palindromic(s, i + 1, j - 1) && s[i] === s[j]
  }
}

// ========================   Time Limit Exceeded   =========================


// ========================  AC.  use memory to record  =========================
 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
  let start = 0, end = 0
  let memory = []
  for (let i = 0; i < s.length; i ++) {
    memory[i] = []
  }
  for (let i = 0; i < s.length; i ++) {
    if ((end - start) === s.length - 1) {
      break
    }
    for (let j = i; j < s.length; j ++) {
      if (palindromic(s, i, j, memory) && (j - i) > (end - start)) {
        start = i
        end = j
      }
    }
  }

  s = s.substring(start, end + 1)
  return s
};

function palindromic(s, i, j, memory) {

  if (j < i) return false

  if (memory[i][j] !== undefined) return memory[i][j]

  if (i === j) {
    return (memory[i][j] = true)
  } else if (i === j - 1) {
    return (memory[i][j] = (s[i] === s[j]))
  }else {
    return (memory[i][j] = palindromic(s, i + 1, j - 1, memory) && s[i] === s[j])
  }
}




// ========================   use memory to record  =========================

// ========================           use dp        =========================
 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function(s) {
  let start = 0, end = 0

  let dp = []

  for (let i = 0; i < s.length; i ++) {
    dp[i] = []
    dp[i][i] = true
    if (i + 1 < s.length) {
      dp[i][i + 1] = s[i] === s[i + 1]
    }
  }

  for (let j = 0; j < s.length; j ++) {
    for (let i = 0; i < j; i ++) {
      if (dp[i][j] === undefined) dp[i][j] = (dp[i + 1][j - 1] && s[i] === s[j])

      if (dp[i][j] && (j - i) > (end - start)) {
        start = i
        end = j
      }
    }
  }
  // console.log(dp)
  s = s.substring(start, end + 1)
  return s

};


// console.log(longestPalindrome3('"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
// console.log(longestPalindrome3('babad'))

console.log(longestPalindrome3("abcba"))