/**
 * 142. Linked List Cycle II
 * 
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let index = 0

  while (head) {
    if (head.index !== undefined) {
      return head.index
    }else {
      head.index = index++
    }
    head = head.next
  }

  return null
};