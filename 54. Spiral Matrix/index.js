/**
 * 54. Spiral Matrix
 * 
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * 
 * Example 1:
 *  Input:
 *  [
 *    [ 1, 2, 3 ],
 *    [ 4, 5, 6 ],
 *    [ 7, 8, 9 ]
 *  ]
 *  Output: [1,2,3,6,9,8,7,4,5]
 * 
 * Example 2:
 *  Input:
 *  [
 *    [1, 2, 3, 4],
 *    [5, 6, 7, 8],
 *    [9,10,11,12]
 *  ]
 *  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */


const DIR = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left'
}

 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let row = matrix.length
  if (row === 0) return []
  if (row === 1) return matrix[0]

  let col = matrix[0].length

  let total = row * col

  let i = 0, x = 0, y = 0

  let res = Array(total)

  let dir = col === 1 ? DIR.down : DIR.right

  let map = {}

  while (i < total) {
    res[i] = matrix[x][y]
    map[`${x},${y}`] = 1
    i ++
    if (dir === DIR.right) {
      y ++
      if (y >= col - 1 || map[`${x},${y+1}`]) {
        dir = DIR.down
      }
    }else if (dir === DIR.down) {
      x ++
      if (x >= row - 1 || map[`${x+1},${y}`]) {
        dir = DIR.left
      }
    }else if (dir === DIR.left) {
      y --
      if (y <= 0 || map[`${x},${y-1}`]) {
        dir = DIR.up
      }
    }else {
      x -- 
      if (x <= 0 || map[`${x-1},${y}`]) {
        dir = DIR.right
      }
    }
  }

  return res
};