/**
 * 63. Unique Paths II
 * 
 * https://leetcode.com/problems/unique-paths-ii/
 */

 /**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let n = obstacleGrid.length
  let m = obstacleGrid[0].length

  let dp = [...Array(n)].map(_ => [...Array(m)].map(_ => 0))

  for (let i = 0; i < n; i ++) {
    if (obstacleGrid[i][0]) break
    dp[i][0] = 1
  }
  for (let i = 0; i < m; i ++) {
    if (obstacleGrid[0][i]) break
    dp[0][i] = 1
  }

  for (let i = 1; i < n; i ++) {
    for (let j = 1; j < m; j ++) {

      dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j-1]
    }
  }

  return dp[n - 1][m - 1]
};