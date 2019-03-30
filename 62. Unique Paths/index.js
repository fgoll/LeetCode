/**
 * 
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. 
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * 
 * Example 1:
 *  Input: m = 3, n = 2
 *  Output: 3
 *  Explanation:
 *  From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 *  1. Right -> Right -> Down 
 *  2. Right -> Down -> Right
 *  3. Down -> Right -> Right
 */

// =================================  Time Limit Exceeded =============================
 /**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let count = 0;
  
  function backtrack(i, j) {
    if (i > m || j > n) return;
    if (i === m && j === n) {
      count ++
      return;
    }
    backtrack(i + 1, j);
    backtrack(i, j + 1);
  }

  backtrack(1, 1);

  return count;

};
// =================================  Time Limit Exceeded =============================

// =================================  use dp =============================
 /**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {

  let dp = []
  for (let i = 0; i < m; i ++) {
    dp.push([])
  }

  for (let i = 0; i < n; i ++) {
    dp[0][i] = 1
  }
  for (let i = 0; i < m; i ++) {
    dp[i][0] = 1
  }


  for (let i = 1; i < m; i ++) {
    for (let j = 1; j < n; j ++) {
      dp[i][j] = dp[i][j-1] + dp[i-1][j]
    }
  }

  return dp[m-1][n-1]

};
// =================================  use dp =============================

console.log(uniquePaths2(19, 13))