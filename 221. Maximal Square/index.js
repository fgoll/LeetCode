/**
 * 221. Maximal Square
 * 
 * Given a 2D binary matrix filled with 0's and 1's, 
 * find the largest square containing only 1's and return its area.
 * 
 * Example:
 *  Input: 
 *    1 0 1 0 0
 *    1 0 1 1 1
 *    1 1 1 1 1
 *    1 0 0 1 0
 *    
 *  Output: 4
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0

  let dp = []
  for (let i = 0; i < rows; i ++) {
    let arr = []
    for (let j = 0; j < rows; j ++) {
      arr.push(0)
    }
    dp.push(arr)
  }

  let max = 0

  for (let i = 1; i <= rows; i ++) {
    for (let j = 1; j < cols; j ++) {
      if (matrix[i-1][j-1] === '1') {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
        max = Math.max(dp[i][j], max)
      }
    }
  }
  return max
};

maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])