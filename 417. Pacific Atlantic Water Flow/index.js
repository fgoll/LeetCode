/**
 * 417. Pacific Atlantic Water Flow
 * 
 * Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, 
 * the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
 * 
 * Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
 * Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
 * 
 * Note:
 *  The order of returned grid coordinates does not matter.
 *  Both m and n are less than 150.
 * 
 * Example:
 *  Given the following 5x5 matrix:
 *    Pacific ~   ~   ~   ~   ~ 
 *         ~  1   2   2   3  (5) *
 *         ~  3   2   3  (4) (4) *
 *         ~  2   4  (5)  3   1  *
 *         ~ (6) (7)  1   4   5  *
 *         ~ (5)  1   1   2   4  *
 *            *   *   *   *   * Atlantic
 *  
 *  Return:
 *    [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
 */

let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]]

function dfs(matrix, visited, height, row, col) {

  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || visited[row][col] || matrix[row][col] < height) {
    return 
  }

  visited[row][col] = true

  for (let dir of dirs) {
    dfs(matrix, visited, matrix[row][col], row + dir[0], col + dir[1])
  }

}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  let res = []
  if (!matrix || !matrix.length || !matrix[0].length) return res
  let row = matrix.length, col = matrix[0].length
  let pacific = [...Array(matrix.length)].map((_ => [...Array(matrix[0].length)]))
  let atlantic = [...Array(matrix.length)].map((_ => [...Array(matrix[0].length)]))

  for (let i = 0; i < row; i ++) {
    dfs(matrix, pacific, matrix[i][0], i, 0)
    dfs(matrix, atlantic, matrix[i][col-1], i, col - 1)
  } 

  for (let i = 0; i < col; i ++) {
    dfs(matrix, pacific, matrix[0][i], 0, i)
    dfs(matrix, atlantic, matrix[row-1][i], row - 1, i)
  }

  for (let i = 0; i < row; i ++) {
    for (let j = 0; j < col; j ++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j])
      }
    }
  }

  return res
};