/**
 * 83. Remove Duplicates from Sorted List
 * 
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * 
 * Example 1:
 *  Input: 1->1->2
 *  Output: 1->2
 * 
 * Example 2:
 *  Input: 1->1->2->3->3
 *  Output: 1->2->3
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
var deleteDuplicates = function(head) {
  if (!head) return null 

  let curr = head
  let next = head.next

  while (next) {
    if (curr.val === next.val) {
      curr.next = next.next
      next = next.next
    }else {
      curr = curr.next
      next = next.next
    }
    
  }
  return head
};


var deleteDuplicates = function(head) {
  if (!head) return null 

  let curr = head

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    }else {
      curr = curr.next
    }
    
  }
  return head
};