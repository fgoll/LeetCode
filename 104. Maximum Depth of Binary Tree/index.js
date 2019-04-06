/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * return its depth = 3.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * using the method of 102
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let queue = []
  let depth = 0

  if (root === null) return depth

  queue.push(root)

  while (queue.length !== 0) {
    let size = queue.length; 
    depth++
    
    for (let i = 0; i < size; i ++) {
      let node = queue.shift()

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return depth
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function (root) {

  return root === null ? 0 :
                         1 + Math.max(maxDepth2(root.left), maxDepth2(root.right)) 
};

