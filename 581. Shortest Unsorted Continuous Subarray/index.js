/**
 * 581. Shortest Unsorted Continuous Subarray
 * 
 * Given an integer array, you need to find one continuous subarray that 
 * if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
 * 
 * You need to find the shortest such subarray and output its length.
 * 
 * Example 1:
 *  Input: [2, 6, 4, 8, 10, 9, 15]
 *  Output: 5
 *  Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 *  
 * Note:
 *  Then length of the input array is in range [1, 10,000].
 *  The input array may contain duplicates, so ascending order here means <=.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let stack = []
  let left = nums.length - 1, right = 0
  for (let i = 0; i < nums.length; i ++) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] <= nums[i]) {
      stack.push(i)
    }else {
      left = Math.min(left, stack.pop())
      i --
    }
  }  
  stack = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] >= nums[i]) {
      stack.push(i)
    }else {
      right = Math.max(right, stack.pop())
      i ++
    }
  }

  return right - left  > 0 ? right - left + 1 : 0
};