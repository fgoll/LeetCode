/**
 * 99. Recover Binary Search Tree
 * 
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * 
 * Recover the tree without changing its structure.

Example 1:

  Input: [1,3,null,null,2]

    1
    /
  3
    \
    2

  Output: [3,1,null,null,2]

    3
    /
  1
    \
    2
Example 2:

  Input: [3,1,4,null,null,2]

    3
  / \
  1   4
    /
    2

  Output: [2,1,4,null,null,3]

    2
  / \
  1   4
    /
    3
  Follow up:

  A solution using O(n) space is pretty straight forward.
  Could you devise a constant space solution?
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 利用中序遍历找出 当中的逆序对
 * 使用 Morris traversal 可以在constant space下遍历该树
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let first
  let second
  let isFirst = true
  let pre = new TreeNode(-Number.MAX_VALUE)
  while (root) {
    if (root.left) {
      let temp = root.left
      while (temp.right && temp.right !== root) {
        temp = temp.right
      }
      if (temp.right) {
        temp.right = null
        // visit
        if (pre.val > root.val) {
          if (isFirst) {
            first = pre
            isFirst = false
          }
          if (!isFirst) {
            second = root
          }          
        }
        pre = root
        root = root.right
      }else {
        temp.right = root
        root = root.left
      }
    }else {
      // visit
      if (pre.val > root.val) {
        if (isFirst) {
          first = pre
          isFirst = false
        }
        if (!isFirst) {
          second = root
        }          
      }
      pre = root
      root = root.right
    }
  }
  if (first && second) {
    let temp = first.val
    first.val = second.val
    second.val = temp
  }
};