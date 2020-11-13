/**
 * 463. Island Perimeter
 * 
 * https://leetcode.com/problems/island-perimeter/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  
  let perimeter = 0
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[i].length; j ++) {
      let c = grid[i][j]
      let t = j > 0 ? grid[i][j - 1] : 0
      let l = i > 0 ? grid[i - 1][j] : 0
      let r = i < grid.length - 1 ? grid[i + 1][j] : 0
      let b = j < grid[i].length - 1 ? grid[i][j + 1] : 0
      if (c === 1) {
        perimeter += ((t === 0) + (l === 0) + (r === 0) + (b === 0))
      }
    }
  }
  return perimeter
};