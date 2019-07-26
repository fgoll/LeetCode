/**
 * 109. Convert Sorted List to Binary Search Tree
 * 
 * Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree 
 * in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 * Example:
 *  Given the sorted linked list: [-10,-3,0,5,9],
 *  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
            0
          / \
        -3   9
        /   /
      -10  5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let nums = []

  while (head) {
    nums.push(head.val)
    head = head.next
  }

  return build(nums, 0, nums.length - 1)
};

function build(nums, low, high) {
  if (low > high) return null
  let mid = (low + high) >> 1

  let node = new TreeNode(nums[mid])
  node.left = build(nums, low, mid - 1)
  node.right = build(nums, mid + 1, high)
  return node
}