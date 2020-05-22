/**
 * 391. Perfect Rectangle
 * 
 * https://leetcode.com/problems/perfect-rectangle/
 */

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  if (rectangles.length === 0 || rectangles[0].length === 0) return false

  let x1 = Number.MAX_VALUE
  let x2 = Number.MIN_VALUE
  let y1 = Number.MAX_VALUE
  let y2 = Number.MIN_VALUE

  let area = 0

  let set = new Set()

  for (let rectangle of rectangles) {
    x1 = Math.min(rectangle[0], x1)
    y1 = Math.min(rectangle[1], y1)
    x2 = Math.max(rectangle[2], x2)
    y2 = Math.max(rectangle[3], y2)

    area += (rectangle[3] - rectangle[1]) * (rectangle[2] - rectangle[0])

    let corner1 = rectangle[0] + ' ' + rectangle[1]
    let corner2 = rectangle[0] + ' ' + rectangle[3]
    let corner3 = rectangle[2] + ' ' + rectangle[1]
    let corner4 = rectangle[2] + ' ' + rectangle[3]

    let corners = [corner1, corner2, corner3, corner4]

    corners.forEach(corner => {
      if (set.has(corner)) { set.delete(corner) }
      else set.add(corner)
    })
  }

  let corner1 = x1 + ' ' + y1
  let corner2 = x1 + ' ' + y2
  let corner3 = x2 + ' ' + y1
  let corner4 = x2 + ' ' + y2

  if (!set.has(corner1) || !set.has(corner2) || !set.has(corner3) || !set.has(corner4) || set.size !== 4) return false

  return area === (x2-x1) * (y2-y1)
};