/**
 * 95. Unique Binary Search Trees II
 * 
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.
 *  
 * Example:
 *  Input: 3
 *  Output:
 *  [
 *    [1,null,3,2],
 *    [3,2,null,1],
 *    [3,1,null,null,2],
 *    [2,1,3],
 *    [1,null,2,null,3]
 *  ]
 * Explanation:
 *  The above output corresponds to the 5 unique BST's shown below:
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []
  return generate(1, n)
};

function generate(start, end) {
  let list = []

  if (start > end) {
    list.push(null)
    return list
  }

  if (start === end) {
    list.push(new TreeNode(start))
    return list
  }

  let left, right

  for (let i = start; i <= end; i ++) {
    left = generate(start, i - 1)
    right = generate(i + 1, end)

    for (let lnode of left) {
      for (let rnode of right) {
        let root = new TreeNode(i)
        root.left = lnode
        root.right = rnode
        list.push(root)
      }
    }
  }

  return list
}