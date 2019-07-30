/**
 * 113. Path Sum II
 * 
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 *  Given the below binary tree and sum = 22,
            5
          / \
         4   8
        /   / \
       11  13  4
      /  \    / \
     7    2  5   1
 *  Return:
      [
        [5,4,11,2],
        [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []
  let result = []
  helper(root, root.val, sum, [], result)
};

function helper(node, pathSum, sum, path, result) {
  if (!node) {
    return
  }

  path.push(node.val)

  if (!node.left && !node.right && sum === pathSum) {
    result.push(path)
    return 
  }

  let left = node.left ? node.left.val : 0
  let right = node.right ? node.right.val : 0

  return helper(node.left, pathSum + left, sum, path, result) || helper(node.right, pathSum + right, sum, path, result)
}