/**
 * 160. Intersection of Two Linked Lists
 * 
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lenA = lenB = 0
  let tempA = headA
  let tempB = headB
  while (tempA) {
    lenA ++
    tempA = tempA.next
  }

  while (tempB) {
    lenB ++
    tempB = tempB.next
  }

  if (lenA > lenB) {
    let space = lenA - lenB

    while (space > 0) {
      headA = headA.next
    }
  }else {
    let space = lenB - lenA
    while(space > 0) {
      headB = headB.next
    }
  }

  while (headA && headB) {
    if (headA == headB) {
      return headA
    }
    headA = headA.next
    headB = headB.next
  }
  return null
};