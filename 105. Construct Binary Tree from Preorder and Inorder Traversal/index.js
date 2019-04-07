/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 *  You may assume that duplicates do not exist in the tree.
 *  
 * For example, given
 *  preorder = [3,9,20,15,7]
 *  inorder = [9,3,15,20,7]
 *  Return the following binary tree:
 *      3
 *     / \
 *    9  20
 *      /  \
 *    15   7
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

  function build(prestart, instart, inend) {

    if (instart >= inend || prestart === preorder.length) return null

    let rootVal = preorder[prestart];

    let rank = instart

    for (let i = instart; i < inend; i++) {
      if (rootVal === inorder[i]) {
        rank = i;
        break;
      }
    }

    let size = rank - instart;

    let node = new TreeNode(rootVal)

    node.left = build(prestart + 1, instart, rank)

    node.right = build(prestart + size + 1, rank + 1, inend)


    return node

  }

  return build(0, 0, inorder.length)
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))