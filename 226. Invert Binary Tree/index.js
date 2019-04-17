/**
 * 226. Invert Binary Tree
 * 
 * Invert a binary tree.
 * 
 * Example:
 *  Input:
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *  
 *  Output:
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 * 
 *  Google: 90% of our engineers use the software you wrote (Homebrew), 
 *          but you can’t invert a binary tree on a whiteboard so f*** off.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  
  if (!root) return null

  invertTree(root.left)
  invertTree(root.right)

  let left = root.left
  root.left = root.right
  root.right = left

  return root
};

var invertTree2 = function(root) {
  if (!root) return null
  let queue = []

  queue.push(root) 

  while (queue.length !== 0) {
    let node = queue.shift()

    let left = node.left
    node.left = node.right
    node.right = left

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return root
};