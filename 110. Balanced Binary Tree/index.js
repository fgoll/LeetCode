/**
 * 110. Balanced Binary Tree
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 *  a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 * Example 1:
 *  Given the following tree [3,9,20,null,null,15,7]:
          3
        / \
        9  20
          /  \
        15   7
    Return true.
 * Example 2:
 *  Given the following tree [1,2,2,3,3,null,null,4,4]:
            1
            / \
          2   2
          / \
        3   3
        / \
      4   4
    Return false.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true

  let left = depth(root.left)
  let right = depth(root.right)

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function depth(node) {
  if (!node) return 0
  return Math.max(depth(node.left), depth(node.right)) + 1
}


var isBalanced = function(root) {
  return dfsHeight(root) !== -1
};

function dfsHeight(node) {
  if (!node) return 0

  let leftHeight = dfsHeight(node.left)
  if (leftHeight === -1) return -1
  let rightHeight = dfsHeight(node.right)
  if (rightHeight === -1) return -1
  
  if (Math.abs(leftHeight - rightHeight) > 1) return -1
  return Math.max(leftHeight, rightHeight) + 1
}