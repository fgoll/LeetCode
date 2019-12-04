/**
 * 304. Range Sum Query 2D - Immutable
 * 
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) return
  dp = [...Array(matrix.length)].map(_ => [...Array(matrix[0].length + 1)].map(_ => 0))
  
  for (let r = 0; r < matrix.length; r ++) {
    for (let c = 0; c < matrix[r].length; c ++) {
      dp[r][c+1] = dp[r][c] + matrix[r][c]
    }
  }
  this.dp = dp
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0
  for (let row = row1; row <= row2; row ++) {
    sum += this.dp[row][col2+1] - this.dp[row][col1]
  }
  return sum
};
/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */