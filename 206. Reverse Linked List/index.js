/**
 * 206. Reverse Linked List
 * 
 * Reverse a singly linked list.
 * 
 * Example:
 *  Input: 1->2->3->4->5->NULL
 *  Output: 5->4->3->2->1->NULL
 * 
 * Follow up:
 *  A linked list can be reversed either iteratively or recursively. Could you implement both?
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
var reverseList = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  head = new ListNode(null)
  let node = head
  for (let i = arr.length - 1; i >= 0; i --) {
    node.next = new ListNode(arr[i])
    node = node.next
  }

  return head.next
};

/**
 * iterative
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function(head) {
 
  let prev = null
  let curr = head

  while (curr) {
    let tempNext = curr.next
    curr.next = prev
    prev = curr
    curr = tempNext
  }
  
  return prev
};

/**
 * recursive
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList3 = function(head) {
  if (head === null || head.next === null) return head

  let p = reverseList3(head.next)
  head.next.next = head
  head.next = null
  return p
};