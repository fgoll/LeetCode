/**
 * 84. Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 */

 /**
 * @param {number[]} heights
 * @return {number}
 * O(n^2)
 */
var largestRectangleArea = function(heights) {
  let area = 0
  for (let i = 0; i < heights.length;i ++) {
    if (heights[i+1] === undefined || heights[i] > heights[i+1]) {
      let minHeight
      let curArea
      for (let j = i; j >= 0; j --) {
        if (minHeight === undefined || minHeight > heights[j]) {
          minHeight = heights[j]
        }
        curArea = (i - j + 1) * minHeight

        if (curArea > area) {
          area = curArea
        }
      }
    }
    
  }
  return area
};

 /**
 * @param {number[]} heights
 * @return {number}
 * O(n)
 */
var largestRectangleArea2 = function(heights) {
  let area = 0
  let stack = []
  heights.push(0)
  for (let i = 0; i < heights.length;i ++) {
    
    while (stack.length !== 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let top = stack.pop()

      let w = i - (stack.length === 0 ? 0 : (stack[stack.length - 1] + 1))
      area = Math.max(area, heights[top] * w)
    }
    stack.push(i)
  }
  return area
};


let d1 = new Date()
console.log(largestRectangleArea([2,1,5,6,2,3,5,6]))
let d2 = new Date()

console.log(d2 - d1)