/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * 
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 *  You may assume that duplicates do not exist in the tree.
 *  For example, given
 *    inorder = [9,3,15,20,7]
 *    postorder = [9,15,7,20,3]
 *    Return the following binary tree:
            3
          / \
          9  20
            /  \
          15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return helper(inorder, postorder, postorder.length - 1, 0, inorder.length - 1)
};

function helper(inorder, postorder, ppos, is, ie) {
  if (ppos >= postorder.length || is > ie) {
    return null
  }

  let node = new TreeNode(postorder[ppos])
  let pii = 0
  for (let i = 0; i < inorder.length; i ++) {
    if (inorder[i] === postorder[ppos]) pii = i
  }
  node.left = helper(inorder, postorder, ppos - 1 - ie + pii, is, pii - 1)
  node.right = helper(inorder, postorder, ppos - 1, pii + 1, ie)
  return node
}