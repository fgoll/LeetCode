/**
 * 4. Median of Two Sorted Arrays
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 *    nums1 = [1, 3]
 *    nums2 = [2]
 *    The median is 2.0
 * 
 * Example 2:
 *    nums1 = [1, 2]
 *    nums2 = [3, 4]
 *    The median is (2 + 3)/2 = 2.5
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = merge(nums1, nums2)
    let mid = nums.length >> 1
    let median = (nums.length % 2 === 0) ? 
               ((nums[mid-1] + nums[mid]) / 2) :
               (nums[mid])
    return median
};

var merge = function(nums1, nums2) {
  let nums = []
  let i = 0, j = 0
  
  while (i < nums1.length || j < nums2.length) {
    let num1 = nums1[i]
    let num2 = nums2[j]
    if (num1 !== undefined && (num1 <= num2 || num2 === undefined)) {
      nums.push(num1)
      i ++
    }else if (num2 !== undefined) {
      nums.push(num2)
      j ++
    }
  }

  return nums
}


nums1 = [1,3]
nums2 = [2]

console.log(findMedianSortedArrays(nums1, nums2))

