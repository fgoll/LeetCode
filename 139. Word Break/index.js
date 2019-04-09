/**
 * 139. Word Break
 * 
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * 
 * Note:
 * The same word in the dictionary may be reused multiple times in the segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * Example 1:
 *  Input: s = "leetcode", wordDict = ["leet", "code"]
 *  Output: true
 *  Explanation: Return true because "leetcode" can be segmented as "leet code".
 * 
 * Example 2:
 *  Input: s = "applepenapple", wordDict = ["apple", "pen"]
 *  Output: true
 *  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 *               Note that you are allowed to reuse a dictionary word.
 * 
 * Example 3:
 *  Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 *  Output: false
 */

 /**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dict = {}
  for (word of wordDict) {
    dict[word] = true
  }

  let memory = {}

  function helper(s) {

    if (memory[s] !== undefined) return memory[s]

    if (dict[s]) return memory[s] = true

    for (let i = 0; i < s.length; i ++) {
      let left = s.substring(0, i)
      let right = s.substring(i, s.length)

      if (dict[right] && helper(left)) {
        return memory[s] = true
      }
    }
    return memory[s] = false

  }

  return helper(s)
};

 /**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak2 = function(s, wordDict) {
  let dp = new Array(s.length + 1)

  dp[0] = true

  let dict = {}
  for (word of wordDict) {
    dict[word] = true
  }

  // dp[i] = dp[0->i-1] && wordDict[i->i-1]
  for (let i = 1; i <= s.length; i ++) {
    dp[i] = false
    for (let j = i-1; j > 0; j--) {
      let sub = s.substring(j,i)
       dp[i] = dp[j] && inDict(sub, dict)
       if (dp[i]) break
    }
  }

  return dp[s.length]
}

function inDict(s, dict) {
  if (dict[s]) return true
  return false
}