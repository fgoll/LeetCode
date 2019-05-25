/**
 * 25. Reverse Nodes in k-Group
 * 
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the linked list. 
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * 
 * Example:
 *  Given this linked list: 1->2->3->4->5
 *  For k = 2, you should return: 2->1->4->3->5
 *  For k = 3, you should return: 3->2->1->4->5
 * 
 * Note:
 *  Only constant extra memory is allowed.
 *  You may not alter the values in the list's nodes, only nodes itself may be changed.
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null

  let temp = new ListNode(0)
  temp.next = head
  let prev = temp
  while (prev) {
    prev = helper(prev, k)
  }
  return temp.next
};

function helper(prev, k) {
  let last = prev
  for (let i = 0; i <= k; i ++) {
    last = last.next
    if (!last && i < k) return null
  }

  let tail = prev.next
  let curr = prev.next.next

  //  k = 3  prev  ->   tail   ->   curr   ->    next   ->   last
  // 每次将curr 移至prev之后
  while (curr != last) {
    let next = curr.next
    tail.next = curr.next
    curr.next = prev.next
    prev.next = curr
    curr = next
  }

  return tail
}
