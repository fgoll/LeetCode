/**
 * 141. Linked List Cycle
 * 
 * https://leetcode.com/problems/linked-list-cycle/
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.tag) {
      return true
    } else {
      head.tag = true
    }
    head = head.next
  }

  return false
};


var hasCycle2 = function (head) {
  if (head === null || head.next === null) return false
  let s = head
  let f = head.next
  while (f != s) {
    if (f === null || f.next === null) return false
    s = s.next
    f = f.next.next
  }

  return true
};