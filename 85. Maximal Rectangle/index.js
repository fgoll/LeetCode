/**
 * 85. Maximal Rectangle
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 * 
 * Example:
 *  Input:
 *  [
 *    ["1","0","1","0","0"],
 *    ["1","0","1","1","1"],
 *    ["1","1","1","1","1"],
 *    ["1","0","0","1","0"]
 * ]
 * Output: 6
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let heights = []
  for (let i = 0; i < matrix.length; i++) {
    let temp = []
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '0') {
        temp.push(0)
      } else {
        let prevHeight = heights[i - 1] ? heights[i - 1][j] : 0
        temp.push(prevHeight + 1)
      }
    }
    heights.push(temp)
  }

  // use method of 84. Largest Rectangle in Histogram
  let area = 0
  for (let i = 0; i < heights.length; i++) {
    area = Math.max(areas(heights[i]), area)
  }

  return area
};

var areas = function (heights) {
  let area = 0;

  let stack = []

  heights.push(0)
  for (let i = 0; i < heights.length; i++) {
    
    while (stack.length !== 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let top = stack.pop()
      let left = i - (stack.length === 0 ? 0 : (stack[stack.length - 1] + 1))
      area = Math.max(area, heights[top] * left)
    }

    stack.push(i)
  }

  return area
}

console.log(maximalRectangle([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))
