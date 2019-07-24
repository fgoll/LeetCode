/**
 * 107. Binary Tree Level Order Traversal II
 * 
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
 * (ie, from left to right, level by level from leaf to root).
 * 
 * For example:
 *  Given binary tree [3,9,20,null,null,15,7],
        3
      / \
      9  20
        /  \
      15   7
 *  return its bottom-up level order traversal as:
    [
      [15,7],
      [9,20],
      [3]
    ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  function dfs(root, level) {
    if (!root) return 
  
    if (level === res.length) {
      res.push([])
    }

    res[level].push(root.val)
    dfs(root.left, level+1)
    dfs(root.right, level+1)
  }
  dfs(root, 0);
  res.reverse();
  return res
};

