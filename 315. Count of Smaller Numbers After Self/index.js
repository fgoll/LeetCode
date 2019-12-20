/**
 * 315. Count of Smaller Numbers After Self
 * 
 * You are given an integer array nums and you have to return a new counts array. 
 * The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
 * 
 * Example:
 *  Input: [5,2,6,1]
 *  Output: [2,1,1,0] 
 * 
 * Explanation:
 *  To the right of 5 there are 2 smaller elements (2 and 1).
 *  To the right of 2 there is only 1 smaller element (1).
 *  To the right of 6 there is 1 smaller element (1).
 *  To the right of 1 there is 0 smaller element.
 */

function BSTNode(val) {
  this.val = val
  this.count = 1
  this.leftCount = 0
  this.left = null
  this.right = null
}

BSTNode.prototype.lessOrEqual = function() {
  return this.count + this.leftCount
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  if (!nums.length) return []
  nums.reverse()
  let root = new BSTNode(nums[0])
  let ans = [0]
  for (let i = 1; i < nums.length; i ++) {
    ans.push(insert(root, nums[i]))
  }
  ans.reverse()
  return ans
};

function insert(root, val) {
  if (root.val === val) {
    ++ root.count
    return root.leftCount
  }else if (val < root.val) {
    ++ root.leftCount
    if (!root.left) {
      root.left = new BSTNode(val)
      return 0
    }
    return insert(root.left, val)
  }else {
    if (!root.right) {
      root.right = new BSTNode(val)
      return root.lessOrEqual()
    }
    return root.lessOrEqual() + insert(root.right, val)
  }
}