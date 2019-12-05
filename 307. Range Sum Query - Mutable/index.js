/**
 * 307. Range Sum Query - Mutable
 * 
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * 
 * The update(i, val) function modifies nums by updating the element at index i to val.
 * 
 * Example:
 *  Given nums = [1, 3, 5]
 *  
 *  sumRange(0, 2) -> 9
 *  update(1, 2)
 *  sumRange(0, 2) -> 8
 * 
 * Note:
 *  The array is only modifiable by the update function.
 *  You may assume the number of calls to update and sumRange function is distributed evenly.
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.buildTree(nums)
};

NumArray.prototype.buildTree = function(nums) {
  let n = nums.length
  this.n = n
  if (n) {
    let tree = [...Array(n*2)]
    for (let i = n, j = 0; i < n * 2; i ++, j ++) {
      tree[i] = nums[j]
    }
    for (let i = n - 1; i > 0; i --) {
      tree[i] = tree[i * 2] + tree[i * 2 + 1]
    }
    this.tree = tree
  }
}

/** 
* @param {number} i 
* @param {number} val
* @return {void}
*/
NumArray.prototype.update = function(pos, val) {
  pos += this.n;
  this.tree[pos] = val;
  while (pos > 0) {
    let left = pos;
    let right = pos;
    if (pos % 2 === 0) {
        right = pos + 1;
    } else {
        left = pos - 1;
    }
    // parent is updated after child is updated
    this.tree[pos >> 1] = this.tree[left] + this.tree[right];
    pos >>= 1;
  }
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  let l = i + this.n
  let r = j + this.n
  let sum = 0
  while (l <= r) {
    if ((l % 2) === 1) {
      sum += this.tree[l]
      l ++
    }
    if ((r % 2) === 0) {
      sum += this.tree[r];
      r--;
    }
    l >>= 1;
    r >>= 1;
  }
  return sum
};


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */