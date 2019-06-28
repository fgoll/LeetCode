/**
 * 74. Search a 2D Matrix
 * 
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *  Integers in each row are sorted from left to right.
 *  The first integer of each row is greater than the last integer of the previous row.
 * 
 * Example 1:
 *  Input:
 *  matrix = [
 *    [1,   3,  5,  7],
 *    [10, 11, 16, 20],
 *    [23, 30, 34, 50]
 *  ]
 *  target = 3
 *  Output: true
 * 
 * Example 2:
 *  Input:
 *  matrix = [
 *    [1,   3,  5,  7],
 *    [10, 11, 16, 20],
 *    [23, 30, 34, 50]
 *  ]
 *  target = 13
 *  Output: false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  
  let row = matrix.length
  if (row === 0) return false
    
  let col = matrix[0].length
  let map = {}
  var search = function(i, j) {
    if (map[`${i}${j}`] !== undefined) return map[`${i}${j}`]
    if (i >= row || j >= col) return false
    
    let res
    if (target > matrix[i][j]) {
      res = search(i + 1, j) || search(i, j + 1)
    }else if (target < matrix[i][j]) {
      res = false
    } else {
      res = true
    }

    map[`${i}${j}`] = res
    
    return res
  }
  
  return search(0, 0)
};


var searchMatrix = function(matrix, target) {
  
  let row = matrix.length
  if (row === 0) return false
    
  let col = matrix[0].length

  let [low, high] = [0, row * col - 1]

  while (low < high) {

    let mid = (low + high) >> 1

    let [i, j] = [Math.floor(mid / col), Math.floor(mid %  col)]

    if (matrix[i][j] > target) {
      high = mid
    }else if (matrix[i][j] < target) {
      low = mid + 1
    }else {
      return true
    }
  }
  return false
};