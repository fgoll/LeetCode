/**
 * Given a binary tree, return the level order traversal of its nodes' values. 
 * (ie, from left to right, level by level).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *   3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 * return its level order traversal as:
 * [
 *  [3],
 *  [9,20],
 *  [15,7]
 * ]
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/** 1 2 4 8 16
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [root]

  let res = []

  if (root === null) return res
  
  while (queue.length !== 0) {
    let level = []
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i ++) {
      let node = queue.shift()
      level.push(node.val)
      if (node.left)
        queue.push(node.left)
      if (node.right)
      queue.push(node.right)
    }
    res.push(level)
  
  }
  return res
};