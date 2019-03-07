/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 * Example:
 *    Given linked list: 1->2->3->4->5, and n = 2.
 *    After removing the second node from the end, the linked list becomes 1->2->3->5.
 * 
 * Note:
 *    Given n will always be valid.
 */


  function ListNode(val) {
      this.val = val;
     this.next = null;
 }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let l = 0
  let node = head
  while (node) {
    l ++
    node = node.next
  }

  let t = l - n 
  node = head
  while (--t > 0) {
    
    node = node.next
  }
  
  if (l === n) {
    head = node.next
  }else {
    node.next = node.next ? node.next.next : null
  }
  
  return head
};

let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)


console.log(removeNthFromEnd(head, 1))