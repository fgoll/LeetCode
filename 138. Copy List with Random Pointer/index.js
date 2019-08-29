/**
 * 138. Copy List with Random Pointer
 * 
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

  return copy(head, {})

};

function copy(node, map) {
  if (!node) return null
  if (map[node.val]) return map[node.val]
  
  let newNode = new Node(node.val)
  map[node.val] = newNode
  newNode.next = copy(node.next, map)
  newNode.random = copy(node.random, map)
  return newNode
}    