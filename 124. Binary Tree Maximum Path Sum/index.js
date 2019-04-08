/**
 * 124. Binary Tree Maximum Path Sum
 * 
 * Given a non-empty binary tree, find the maximum path sum.
 * For this problem, a path is defined as any sequence of nodes
 * from some starting node to any node in the tree along the parent-child connections. 
 * The path must contain at least one node and does not need to go through the root.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {

  if (!root) return 0

  let sum = root.val

  function calSum(node) {
    if (node === null) return 0

    let left = Math.max(0, calSum(node.left))
    let right = Math.max(0, calSum(node.right))

    sum = Math.max(sum, left + right + node.val)

    return Math.max(left, right) + val
  }

  calSum(root)

  return sum
};