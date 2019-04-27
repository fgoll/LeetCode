/**
 * 337. House Robber III
 * 
 * https://leetcode.com/problems/house-robber-iii/
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
 * @return {number}
 */
var rob = function (root) {
  if (root === null) return 0
  let val = 0
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right)
  }

  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right)
  }

  return Math.max(val + root.val, rob(root.left) + rob(root.right))
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {

  function helper(node) {
    if (node === null) return 0
    if (node.memory) return node.memory

    let val = 0
    if (node.left) {
      val += helper(node.left.left) + helper(node.left.right)
    }
  
    if (node.right) {
      val += helper(node.right.left) + helper(node.right.right)
    }
  
    val = Math.max(val + node.val, helper(node.left) + helper(node.right))
    node.memory = val
    return val
  }

  return helper(root)
};
