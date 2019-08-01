/**
 * 117. Populating Next Right Pointers in Each Node II
 * 
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
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
  let temp = new Node()
  temp.next = root
  while (root) {
    let dummy = new Node()
    let curr = dummy
    while (root) {
      if (root.left) {
        curr.next = root.left
        curr = curr.next
      }
      if (root.right) {
        curr.next = root.right
        curr = curr.next
      }
      root = root.next
    }
    root = dummy.next
  }
  return temp.next
};