/**
 * 64. Minimum Path Sum
 * Given a m x n grid filled with non-negative numbers, 
 * find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 *  Input:
 *  [
 *    [1,3,1],
 *    [1,5,1],
 *    [4,2,1]
 *  ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = []

  if (grid.length === 0) return 0;

  let m = grid.length, n = grid[0].length;

  for (let i = 0; i < m; i ++) {
    dp.push([])
  }


  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (i === 0) {
        dp[i][j] = dp[i][j-1] ? dp[i][j-1] + grid[i][j] : grid[i][j];
      }else if (j === 0) {
        dp[i][j] = dp[i-1][j] + grid[i][j]
      }else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j-1]) + grid[i][j];
      }
    }
  }

  return dp[m-1][n-1]
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))