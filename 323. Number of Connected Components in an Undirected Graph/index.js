/**
 * 323. Number of Connected Components in an Undirected Graph
 */

// 给定一个二叉树，返回其结点 垂直方向（从上到下，逐列）遍历的值。

// 如果两个结点在同一行和列，那么顺序则为 从左到右。

// 示例 1：

// 输入: [3,9,20,null,null,15,7]

//    3
//   /\
//  /  \
// 9   20
//     /\
//    /  \
//   15   7 

// 输出:

// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]
// 示例 2:

// 输入: [3,9,8,4,0,1,7]

//      3
//     /\
//    /  \
//   9    8
//   /\   /\
//  /  \ /  \
// 4   0 1   7 

// 输出:

// [
//   [4],
//   [9],
//   [3,0,1],
//   [8],
//   [7]
// ]
// 示例 3:

// 输入: [3,9,8,4,0,1,7,null,null,null,2,5]（注意：0 的右侧子节点为 2，1 的左侧子节点为 5）

//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//     /\
//    /  \
//    5   2

// 输出:

// [
//   [4],
//   [9,5],
//   [3,0,1],
//   [8,2],
//   [7]
// ]

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
var verticalOrder = function(root) {
  let queue = []
  let map = {}
  root && queue.push([0, root])
  let min = Number.MAX_VALUE
  let max = 0

  while (queue.length) {
    let [level, node] = queue.shift()

    map[level] = map[level] || []
    map[level].push(node.val)
    min = Math.min(level, min)
    max = Math.max(level, max)
    if (node.left) {
      queue.push([level-1, node.left])
    }
    if (node.right) {
      queue.push([level+1, node.right])
    }
  }
  let res = []
  for (let i = min; i <= max; i ++) {
    res.push(map[i])
  }

  return res
};