/**
 * 329. Longest Increasing Path in a Matrix
 * 
 * Given an integer matrix, find the length of the longest increasing path.
 * 
 * From each cell, you can either move to four directions: left, right, up or down. 
 * You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).
 * 
 * Example 1:
 *  Input: nums = 
 *   [
 *    [9,9,4],
 *    [6,6,8],
 *    [2,1,1]
 *   ] 
 *  Output: 4 
 *  Explanation: The longest increasing path is [1, 2, 6, 9].
 * 
 * Example 2:
 *  Input: nums = 
 *   [
 *    [3,4,5],
 *    [3,2,6],
 *    [2,2,1]
 *   ] 
 *  Output: 4 
 *  Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
 */

let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) return 0;

  let m = matrix.length, n = matrix[0].length;

  let cache = [...Array(m)].map(_ => [...Array(n)]);
  let max = 1;
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      let len = dfs(matrix, i, j, m, n, cache);
      max = Math.max(max, len);
    }
  }

  return max;
};

function dfs(matrix, i, j, m, n, cache) {
  if (cache[i][j]) return cache[i][j];
  let max = 1;
  for (let dir of dirs) {
    let x = i + dir[0], y = j + dir[1];
    if (x < 0 || x >= m || y < 0 || y >=n || matrix[x][y] <= matrix[i][j]) continue;
    let len = 1 + dfs(matrix, x, y, m, n, cache);
    max = Math.max(max, len);
  }

  cache[i][j] = max;

  return max;
}