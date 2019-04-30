/**
 * 437. Path Sum III
 * 
 * https://leetcode.com/problems/path-sum-iii/
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
 * @return {number}
 */
var pathSum = function(root, sum) {
 
  if (!root) return 0
  
  function helper(node, sum) {
    
    if (!node) return 0

    let count = 0

    if (node.val === sum) {
      count += 1
    }

    count += helper(node.left, sum - node.val)
    count += helper(node.right, sum - node.val)

    return count
  }  

  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};