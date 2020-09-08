/**
 * 427. Construct Quad Tree
 * 
 * https://leetcode.com/problems/construct-quad-tree/
 */


/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

function build(r1, c1, r2, c2, g) {
  if (r1 > r2 || c1 > c2) return null

  let isLeaf = true

  let val = g[r1][c1]

  for (let i = r1; i <= r2; i ++) {
    for (let j = c1; j <= c2; j ++) {
      if (g[i][j] !== val) {
        isLeaf = false
        break
      }
    }
  }

  if (isLeaf) return new Node(val, isLeaf, null, null, null, null)

  let rowMid = (r1 + r2) >> 1, colMid = (c1 + c2) >> 1
  return new Node(0, false,
    build(r1, c1, rowMid, colMid, g),//top left 
    build(r1, colMid + 1, rowMid, c2, g),//top right
    build(rowMid + 1, c1, r2, colMid, g),//bottom left 
    build(rowMid + 1, colMid + 1, r2, c2, g));//bottom right
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  
  return build(0, 0, grid.length - 1, grid.length - 1, grid)
};