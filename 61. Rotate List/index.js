/**
 * 61. Rotate List
 * 
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 * 
 * Example 1:
 *  Input: 1->2->3->4->5->NULL, k = 2
 *  Output: 4->5->1->2->3->NULL
 *  Explanation:
 *    rotate 1 steps to the right: 5->1->2->3->4->NULL
 *    rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * Example 2:
 *  Input: 0->1->2->NULL, k = 4
 *  Output: 2->0->1->NULL
 *  Explanation:
 *    rotate 1 steps to the right: 2->0->1->NULL
 *    rotate 2 steps to the right: 1->2->0->NULL
 *    rotate 3 steps to the right: 0->1->2->NULL
 *    rotate 4 steps to the right: 2->0->1->NUL
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
var rotateRight = function(head, k) {
  let len = 0

  let temp = head

  while (temp) {
    temp = temp.next
    len ++
  }

  if (k >= len) {
    k -= len
  }

  let newHead = new ListNode()
  let point1 = newHead

  let newTail = new ListNode()
  let point2 = newTail

  temp = head

  for (let i = 0; i < len; i ++) {
    if (i < (len - k)) {
      point2.next = new ListNode(temp.val)
      point2 = point2.next
    }else {
      point1.next = new ListNode(temp.val)
      point1 = point1.next
    }
    temp = temp.next
  }

  point1.next = newTail.next
  return newHead.next
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let len = 0

  let temp = new ListNode()
  temp.next = head

  let fast = temp, slow = temp;

  while (fast.next) {
    fast = fast.next
    len ++
  }

  for (let i = 0 ; i < len - (k % len); i ++) {
    slow = slow.next
  }
    
  fast.next = temp.next
  temp.next = slow.next
  slow.next = null

  return temp.next
};


