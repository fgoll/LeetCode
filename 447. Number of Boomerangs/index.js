/**
 * 447. Number of Boomerangs
 * 
 * Given n points in the plane that are all pairwise distinct, 
 * a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j 
 * equals the distance between i and k (the order of the tuple matters).
 * 
 * Find the number of boomerangs. 
 * You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
 * 
 * Example:
 *  Input:
 *    [[0,0],[1,0],[2,0]]
 *  Output:
 *    2
 *  Explanation:
 *    The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let res = 0
  let map = {}
  for (let i = 0; i < points.length; i ++) {
    for (let j = 0; j < points.length; j ++) {
      if (i === j) {
        continue
      }

      let d = getDistance(points[i], points[j])
      let v = (map[d] || 0) + 1
      map[d] = v
    }

    for (let v of Object.values(map)) {
      res += v * (v - 1)
    }
    map = {}
  }
  return res
};

function getDistance(a, b) {
  let dx = a[0] - b[0]
  let dy = a[1] - b[1]

  return dx * dx + dy * dy
}