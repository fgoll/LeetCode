/**
 * 2.Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 *    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 *    Output: 7 -> 0 -> 8
 *    Explanation: 342 + 465 = 807.
 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head, cur
  let plus = 0

  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0

    let num = val1 + val2

    if (plus) {
      num += 1
      plus = 0
    }

    if (num > 9) {
      num -= 10
      plus = 1
    }

    if (!head) {
      head = new ListNode(num)
      cur = head
    }else {
      cur.next = new ListNode(num)
      cur = cur.next
    }

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }

  if (plus > 0) {
    cur.next = new ListNode(plus)
  }

  return head
};

