/**
 * 452. Minimum Number of Arrows to Burst Balloons
 * 
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

  if (!points.length) return 0
  
  points.sort((a, b) => a[1] - b[1])
  let arrow = 1
  let first_end = points[0][1]

  for (let [start, end] of points) {
    if (first_end < start) {
      arrow += 1
      first_end = end
    }
  }
  return arrow
};