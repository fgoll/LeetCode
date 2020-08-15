/**
 * 429. N-ary Tree Level Order Traversal
 * 
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  
  let res = []
  
  if (!root) return res

  let queue = []
  
  queue.push(root)

  while (queue.length) {

    let curr = []

    let len = queue.length

    for (let i = 0; i < len; i ++) {
      let node = queue.shift()

      curr.push(node.val)

      for (let n of node.children) {
        queue.push(n)
      }
    }

    res.push(curr)
  }

  return res
};