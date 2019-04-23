/**
 * 297. Serialize and Deserialize Binary Tree
 * 
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let queue = [root]
  let res = ''
  while (queue.length !== 0) {
    let node = queue.shift()

    if (node) {
      // res.push(node.val)
      res += node.val + ','
      queue.push(node.left)
      queue.push(node.right)
    } else {
      res += '#,'
    }
  }

  return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

  let nodeQueue = []

  data = data.split(',')
  let i = 0

  let rootVal = data[i]

  if (rootVal === '#') return null

  let root = new TreeNode(rootVal)

  nodeQueue.push(root)

  while (i < data.length) {
    node = nodeQueue.shift()

    if (!node) break

    let left = data[++i]
    let right = data[++i]

    if (left !== undefined && left !== '#') {
      left = new TreeNode(left)
      nodeQueue.push(left)
      node.left = left
    }

    if (right !== undefined && right !== '#') {
      right = new TreeNode(right)
      node.right = right
      nodeQueue.push(right)
    }

  }

  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */