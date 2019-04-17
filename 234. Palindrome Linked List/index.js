/**
 * 234. Palindrome Linked List
 * 
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 *  Input: 1->2
 *  Output: false
 * 
 * Example 2:
 *  Input: 1->2->2->1
 *  Output: true
 * 
 * Follow up:
 *  Could you do it in O(n) time and O(1) space?
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
var isPalindrome = function(head) {
  let slow = head, fast = head

  let mid = middle(slow, fast)

  slow = reverse(mid)  
  fast = head
  console.log(slow)
  console.log(fast)

  while (slow && fast) {
    if (slow.val !== fast.val) return false
    slow = slow.next
    fast = fast.next
  }
  return true

  function middle(slow, fast) {
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
    }
    if (fast) {
      slow = slow.next
    }
    return slow
  }

  function reverse(head) {
    let prev = null
    while (head) {
      let next = head.next
      head.next = prev
      prev = head
      head = next
    }
    return prev
  }
};