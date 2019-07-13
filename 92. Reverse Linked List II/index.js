/**
 * 92. Reverse Linked List II
 * 
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 *  Input: 1->2->3->4->5->NULL, m = 2, n = 4
 *  Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (head === null) return head
  let temp = new ListNode(0)
  temp.next = head
  let prevm = temp
  let mnode = head
  let nnode = head

  for (let i = 1; i < m; i ++) {
    prevm = mnode
    mnode = mnode.next
  }

  for (let i = 1; i < n; i ++) {
    nnode = nnode.next
  }

  while (mnode !== nnode) {
    prevm.next = mnode.next
    mnode.next = nnode.next
    nnode.next = mnode
    mnode = prevm.next
  }

  return temp.next

};