/**
 * 82. Remove Duplicates from Sorted List II
 * 
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * 
 * Example 1:
 *  Input: 1->2->3->3->4->4->5
 *  Output: 1->2->5
 * 
 * Example 2:
 *  Input: 1->1->1->2->3
 *  Output: 2->3
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
  let temp = new ListNode()
  temp.next = head
  let curr = head
  let prev = temp

  while (curr) {
    while (curr.next && (curr.val === curr.next.val)) {
      curr = curr.next
    }

    if (prev.next === curr) {
      prev = prev.next
    }else {
      prev.next = curr.next
    }

    curr = curr.next
  }

  return temp.next
};