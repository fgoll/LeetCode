/**
 * 154. Find Minimum in Rotated Sorted Array II
 * 
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 * 
 * Find the minimum element.
 * 
 * The array may contain duplicates.
 * 
 * Example 1:
 *  Input: [1,3,5]
 *  Output: 1
 * 
 * Example 2:
 *  Input: [2,2,2,0,1]
 *  Output: 0
 * 
 * Note:
 *  This is a follow up problem to Find Minimum in Rotated Sorted Array.
 *  Would allow duplicates affect the run-time complexity? How and why?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0]

  let left = 0, right = nums.length - 1

  // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
  if (nums[right] > nums[0]) {
    return nums[0]
  }

  while (right >= left) {
    let mid = (left + right) >> 1

    if (nums[mid] > nums[right]) {
      left = mid + 1
    }else if (nums[mid] < nums[right]) {
      right = mid
    }else {
      right --
    }
  }

  return nums[left]
};