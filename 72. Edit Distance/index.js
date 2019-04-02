/**
 * 72. Edit Distance
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 * You have the following 3 operations permitted on a word:
 *    Insert a character
 *    Delete a character
 *    Replace a character
 * 
 * Example 1:
 *    Input: word1 = "horse", word2 = "ros"
 *    Output: 3
 *    Explanation: 
 *      horse -> rorse (replace 'h' with 'r')
 *      rorse -> rose (remove 'r')
 *      rose -> ros (remove 'e')
 */

 /**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let dp = []
  dp[-1] = []
  for (let i = 0; i <= word1.length; i ++) {
    dp.push([])
  }
  dp[-1][-1] = 0;

  for (let i = 0; i <= word1.length; i ++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= word2.length; j ++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i ++) {
    for (let j = 1; j <= word2.length; j ++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      }else {
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
      }
    }
  }
  console.log(dp)

  return dp[word1.length - 1][word2.length - 1]
};
console.log(minDistance('intention', 'execution'))