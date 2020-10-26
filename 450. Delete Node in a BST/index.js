/**
 * 450. Delete Node in a BST
 * 
 * https://leetcode.com/problems/delete-node-in-a-bst/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null

    if (root.val < key) {
      root.right = deleteNode(root.right, key)
    } else if (root.val > key) {
      root.left = deleteNode(root.left, key)
    } else {
      if (!root.left) {
        return root.right
      } else if (!root.right) {
        return root.left
      } else {
        let minNode = findMin(root.right)
        root.val = minNode.val
        root.right = deleteNode(root.right, root.val)
      }
    }
    return root
}; 

function findMin(node) {
  while (node.left) {
    node = node.left
  }
  return node
}