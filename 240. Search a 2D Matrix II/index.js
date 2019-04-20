/**
 * 240. Search a 2D Matrix II
 * 
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *  Integers in each row are sorted in ascending from left to right.
 *  Integers in each column are sorted in ascending from top to bottom.
 * 
 * Example:
 *  Consider the following matrix:
 *    [
 *      [1,   4,  7, 11, 15],
 *      [2,   5,  8, 12, 19],
 *      [3,   6,  9, 16, 22],
 *      [10, 13, 14, 17, 24],
 *      [18, 21, 23, 26, 30]
 *    ]
 * Given target = 5, return true.
 * Given target = 20, return false.
 */

 /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let rows = matrix.length, cols = matrix[0] ? matrix[0].length : 0

  function search(i, j) {
    if (i < 0 || i >= cols || j < 0 || j >= rows) return false

    if (matrix[i][j] === target) return true

    if (matrix[i][j] === '#') return false

    let val = matrix[i][j]

    matrix[i][j] = '#'

    if (target > val) return search(i + 1, j) || search(i, j + 1)
    else return search(i - 1, j) || search(i, j - 1)
  }

  search(0, 0)
};