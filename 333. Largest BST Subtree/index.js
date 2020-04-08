/**
 * 333. Largest BST Subtree
 */

// 给定一个二叉树，找到其中最大的二叉搜索树（BST）子树，其中最大指的是子树节点数最多的。

// 注意:
// 子树必须包含其所有后代。

// 示例:

// 输入: [10,5,15,1,8,null,7]

//    10 
//    / \ 
//   5  15 
//  / \   \ 
// 1   8   7

// 输出: 3
// 解释: 高亮部分为最大的 BST 子树。
//      返回值 3 在这个样例中为子树大小。
// 进阶:
// 你能想出用 O(n) 的时间复杂度解决这个问题吗？

/**
 * l,r表示当前节点为根的二叉搜索树里的值的范围[l,r]，sz为这棵树的节点数，如果不是BST,则sz=-1，还未递归前l=r=root->val
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function(root) {
  let ans = 0
  function dfs(node) {
    let l = node.val, r = node.val, sz = 1
    if (!node.left && !node.right) {
      ans = Math.max(ans, 1)
      return { l, r, sz }
    }
    let valid = 1
    if (node.left) {
      let L = dfs(node.left)

      if (L.sz !== -1 && node.val > L.r) {
        l = L.l
        sz += L.sz
      } else {
        valid = 0
      }
    }
    if (node.right) {
      let R = dfs(node.right) 

      if (R.sz !== -1 && node.val < R.l) {
        r = R.r
        sz += R.sz
      } else {
        valid = 0
      }
    }

    if (valid) {
      ans = Math.max(ans, sz)
      return { l, r, sz }
    }

    return { l: -1, r: -1, sz: -1}
  }

  if (!root) return 0

  dfs(root)

  return ans
};
