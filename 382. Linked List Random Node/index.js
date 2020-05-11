/**
 * 382. Linked List Random Node
 * 
 * Given a singly linked list, return a random node's value from the linked list. 
 * Each node must have the same probability of being chosen.
 * 
 * Follow up:
 *  What if the linked list is extremely large and its length is unknown to you? 
 *  Could you solve this efficiently without using extra space?
 * 
 * Example:
 *  // Init a singly linked list [1,2,3].
 *  ListNode head = new ListNode(1);
 *  head.next = new ListNode(2);
 *  head.next.next = new ListNode(3);
 *  Solution solution = new Solution(head);
 * 
 *  // getRandom() should return either 1, 2, or 3 randomly. 
 *  Each element should have equal probability of returning.
 *  solution.getRandom();
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head

};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let cnt = 0, res = null
  for (let node = this.head; node != null; node = node.next) {
    let r = Math.floor(Math.random() * ++cnt)
    if (r === 0) {
      res = node
    }
  }
  return res.val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */