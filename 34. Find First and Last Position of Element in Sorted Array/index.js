/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 *  Input: nums = [5,7,7,8,8,10], target = 8
 *  Output: [3,4]
 * 
 * Example 2:
 *  Input: nums = [5,7,7,8,8,10], target = 6
 *  Output: [-1,-1]
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let lo = binarySearch(nums, target, true)

  if (nums[lo] !== target) {
    return [-1, -1]
  }
  
  let hi = binarySearch(nums, target)

  return [lo , hi - 1]
};

function binarySearch(nums, target, left) {
  let lo = 0, hi = nums.length 

  while (lo < hi) {
    let mid = (lo + hi) >> 1
    if (left) {
      if (target <= nums[mid]) {
        hi = mid
      }else {
        lo = mid + 1
      }
    }else {
      if (nums[mid] <= target) {
        lo = mid + 1
      }else {
        hi = mid
      }
    }
  }

  return lo
}

console.log(searchRange([5,7,7,8,8,10], 7))
