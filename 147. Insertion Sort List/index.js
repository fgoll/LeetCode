/**
 * 147. Insertion Sort List
 * 
 * 
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
var insertionSortList = function(head) {
  if (!head) return head

  let helper = new ListNode(0)
  let cur = head
  let pre = helper
  let next = null

  while (cur) {
    next = cur.next
    while (pre.next && pre.next.val < cur.val) {
      pre = pre.next
    }

    cur.next = pre.next
    pre.next = cur
    pre = helper
    cur = next
  }

  return helper.next
};