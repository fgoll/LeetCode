/**
 * 199. Binary Tree Right Side View
 * 
 * Given a binary tree, imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom.
 * 
 * Example:
 *  Input: [1,2,3,null,5,null,4]
 *  Output: [1, 3, 4]
 *  
 * Explanation:
 *       1            <---
 *     /   \
 *    2     3         <---
 *     \     \
 *     5     4        <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {

  let queue = [root]
  let depthQueue = [0]
  let maxDepth = 0
  let map = {}

  while (queue.length !== 0) {
    let node = queue.shift()
    let depth = depthQueue.shift()

    if (node) {
      maxDepth = Math.max(maxDepth, depth)
      map[depth] = node.val

      queue.push(node.left)
      queue.push(node.right)
      depthQueue.push(depth + 1)
      depthQueue.push(depth + 1)
    }
    
  }

  return Object.values(map)
};