/**
 * 173. Binary Search Tree Iterator
 * 
 * https://leetcode.com/problems/binary-search-tree-iterator/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.sorted = []
  this.index = -1
  this._inorder(root)
};

BSTIterator.prototype._inorder = function(node) {
  if (!node) return
  this._inorder(node.left)
  this.sorted.push(node.val)
  this._inorder(node.right)
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.sorted[++this.index]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index + 1 < this.sorted.length
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */