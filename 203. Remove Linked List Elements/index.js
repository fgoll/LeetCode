/**
 * 203. Remove Linked List Elements
 * 
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 *  Input:  1->2->6->3->4->5->6, val = 6
 *  Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let tmp = new ListNode(0)
  tmp.next = head
  let prev = tmp
  let curr = head
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
    }else {
      prev = prev.next    
    }
    curr = curr.next
  }  
  return tmp.next
};