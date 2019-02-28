/**
 * 11. Container With Most Water
 * 
 * https://leetcode.com/problems/container-with-most-water/
 */

 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1
    let maxArea = 0

    while (i < j) {
      let h1 = height[i]
      let h2 = height[j]

      let h = h1 > h2 ? h2 : h1
      let area = h * (j - i)

      if (area > maxArea) {
        maxArea = area
      }
      if (h1 < h2) {
        i ++
      }else {
        j --
      }
    }

    return maxArea
};

console.log(maxArea([1,2,4,3]))