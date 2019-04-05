/**
 * 94. Binary Tree Inorder Traversal
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 *  Input: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 *  Output: [1,3,2]
 *  Follow up: Recursive solution is trivial, could you do it iteratively?
 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {

  let stack = []

  let res = []

  while (true) {
    goAlongLeftBranch(root)
    
    if (stack.length === 0) break;

    root = stack.pop()
    
    res.push(root.val)

    root = root.right
  }

  function goAlongLeftBranch(node) {
    while (node) {
      stack.push(node)
      node = node.left
    }
  }

  return res
};

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root))