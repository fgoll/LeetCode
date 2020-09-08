/**
 * 430. Flatten a Multilevel Doubly Linked List
 * 
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  
  let curr = head

  while (curr) {
    
    if (!curr.child) {
      curr = curr.next 
      continue
    }

    let temp = curr.child

    while (temp.next) {
      temp = temp.next
    }
    temp.next = curr.next

    if (curr.next) { curr.next.prev = temp }

    curr.next = curr.child
    curr.child.prev = curr
    curr.child = null
  }

  return head
};