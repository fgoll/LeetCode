/**
 * 149. Max Points on a Line
 * 
 * 
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example 1:

Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let l = points.length
  if (l <= 2) return l

  let res = 0

  for (let i = 0; i < l - 1; i ++) {
  
    let map = {}
    let overlap = 0
    let lineMax = 0
    for (let j = i + 1; j < l; j ++) {
      let kx = points[i][0] - points[j][0]
      let ky = points[i][1] - points[j][1]
      if (kx === 0 && ky === 0) {
        overlap ++
        continue
      }

      let gcd = generateGcd(kx, ky)
      kx /= gcd
      ky /= gcd
      let slope = `${kx}/${ky}`
      let count = map[slope] || 0
      count ++
      map[slope] = count
      lineMax = Math.max(lineMax, count)
    }
      
    res = Math.max(res, lineMax + overlap + 1)
  }

  return res
};

function generateGcd(x, y) {
  if (y === 0) return x
  return generateGcd(y, x % y)
}