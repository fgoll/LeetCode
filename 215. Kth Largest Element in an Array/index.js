/**
 * 215. Kth Largest Element in an Array
 * 
 * Find the kth largest element in an unsorted array. 
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 *  Input: [3,2,1,5,6,4] and k = 2
 *  Output: 5
 * 
 * Example 2:
 *  Input: [3,2,3,1,2,4,5,5,6] and k = 4
 *  Output: 4
 * 
 * Note: 
 *  You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let lo = 0, hi = nums.length - 1
  
  if (k === 0) return 

  while (lo < hi) {
    let i = lo, j = hi
    let pivot = nums[lo]
    while (i < j) {
      while (i < j && pivot >= nums[j]) j --
      nums[i] = nums[j]
  
      while (i < j && pivot <= nums[i]) i ++
      nums[j] = nums[i]
  
    }
    
    nums[i] = pivot

    if (i <= k - 1) {
      lo = i + 1
    }
    if (i >= k - 1) {
      hi = i - 1
    }
  }

  return nums[k - 1]
};