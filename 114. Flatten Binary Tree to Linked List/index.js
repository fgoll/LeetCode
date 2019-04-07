/**
 * 114. Flatten Binary Tree to Linked List
 * 
 * Given a binary tree, flatten it to a linked list in-place.
 * 
 * For example, given the following tree:
 *      1
 *     / \
 *    2   5
 *   / \   \
 *  3   4   6
 * The flattened tree should look like:
 *    1
 *     \
 *     2
 *      \
 *      3
 *       \
 *       4
 *        \
 *        5
 *         \
 *         6
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return 

  flatten(root.left)
  flatten(root.right)

  merge(root)
};

function merge(node) {
  let right = node.right

  node.right = node.left

  let last = node
  while (last.right)
    last = last.right
  
  last.right = right
  node.left = null
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten2 = function (root) {

  let prev = null

  function flattenIn(root) {
    if (root === null) return

    flattenIn(root.right)
    flattenIn(root.left)
    root.right = prev
    root.left = null
    prev = root
  }
  
  flattenIn(root)
}