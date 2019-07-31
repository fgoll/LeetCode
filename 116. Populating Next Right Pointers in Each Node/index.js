/**
 * 116. Populating Next Right Pointers in Each Node
 * 
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root
  let queue = [root]

  while (queue.length !== 0) {
    for (let i = 0, l = queue.length; i < l; i ++) {
      let node = queue.shift()

      node.next = i < l - 1 ? queue[0] : null
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return root
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect2 = function(root) {
  let start = root

  while (start) {
    let cur = start
    while (cur) {
      if (cur.left) {
        cur.left.next = cur.right
      }
      if (cur.right && cur.next) {
        cur.right.next = cur.next.left
      }
      cur = cur.next
    }

    start = start.left
  }

  return root
};

