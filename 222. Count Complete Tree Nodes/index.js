/**
 * 222. Count Complete Tree Nodes
 * 
 * Given a complete binary tree, count the number of nodes.
 * 
 * Note:
 *  Definition of a complete binary tree from Wikipedia:
 *    In a complete binary tree every level, except possibly the last, 
 *    is completely filled, and all nodes in the last level are as far left as possible. 
 *    It can have between 1 and 2h nodes inclusive at the last level h.
 * 
 * Example:
 *  Input: 
 *      1
 *     / \
 *    2   3
 *   / \  /
 *  4  5 6
 *  Output: 6
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
var countNodes = function(root) {
    
  if (!root) return 0

  let left = countLevel(root.left)
  let right = countLevel(root.right)

  if (left === right) {
    return countNodes(root.right) + (1 << left)
  }else {
    return countNodes(root.left) + (1 << right)
  }
};

function countLevel(root) {
  let level = 0

  while (root) {
    level ++ 
    root = root.left
  }

  return level
}