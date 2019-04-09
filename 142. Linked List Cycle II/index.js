/**
 * 142. Linked List Cycle II
 * 
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */

 

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let index = 0

  while (head) {
    if (head.index !== undefined) {
      return head
    }else {
      head.index = index++
    }
    head = head.next
  }

  return null
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function(head) {
  if (head === null || head.next === null) return null
  let s = head
  let f = head
  let start = true
  while (f != s || start) {
    if (start) start = false
    if (f === null || f.next === null) return null
    s = s.next
    f = f.next.next
  }

  s = head

  while (s != f) {
    s = s.next
    f = f.next
  }

  return s
};

let list = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let node4 = new ListNode(-4)

list.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

console.log(detectCycle2(list))