/**
 * 257. Binary Tree Paths
 * 
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Input:
 *     1
 *   /   \
 *  2     3
 *   \
 *    5
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
  let res = []
  if (!root) return res

  function traverse(node, path) {

    if (!node.left && !node.right) {
      res.push(path)
      return
    }
      
    let temp = path + (path ? '->' : '')
    if (node.left) {
      path = temp + node.left.val    
      traverse(node.left, path)
      
    }
    if (node.right) {
      path = temp + node.right.val    
      traverse(node.right, path)  
    }
    
  
  }    

  traverse(root, ''+root.val)

  return res
};
