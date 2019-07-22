/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * 
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (ie, from left to right, then right to left for the next level and alternate between).
 * 
 * For example:
 *  Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
 * return its zigzag level order traversal as:
  [
    [3],
    [20,9],
    [15,7]
  ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let res = []
  if (!root) return res

  let q = []
  q.push(root)
  let size = 1
  let zig = true

  while(q.length !== 0) {
    let tmp = []
    for (let i = 0; i < size; i ++) {
      let n = q.shift()
      if (zig) {
        tmp.push(n.val)
      }else {
        tmp.splice(0, 0, n.val)
      }
      if (n.left) {
        q.push(n.left)
      }
      if (n.right) {
        q.push(n.right) 
      }
    } 
    res.push(tmp)
    size = q.length
    zig = !zig
  }
  return res
};