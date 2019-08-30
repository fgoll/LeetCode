/**
 * 143. Reorder List
 * 
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * 
 * Example 1:
 *  Given 1->2->3->4, reorder it to 1->4->2->3.
 *  
 * Example 2:
 *  Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return

  let p1 = head
  let p2 = head

  // Find the middle of the list
  while (p2.next && p2.next.next) {
    p1 = p1.next
    p2 = p2.next.next
  }

  let preMiddle = p1
  let preCurrent = p1.next

  // Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4
  while (preCurrent.next) {
    let current = preCurrent.next
    preCurrent.next = current.next
    current.next = preMiddle.next
    preMiddle.next = current
  }

  p1 = head
  p2 = preMiddle.next
  // Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
  while (p1 !== preMiddle) {
    preMiddle.next = p2.next
    p2.next = p1.next
    p1.next = p2
    p1 = p2.next
    p2 = preMiddle.next
  }
};