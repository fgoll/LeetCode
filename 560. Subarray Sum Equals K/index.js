/**
 * 560. Subarray Sum Equals K
 * 
 * Given an array of integers and an integer k, 
 * you need to find the total number of continuous subarrays whose sum equals to k.
 * 
 * Example 1:
 *  Input:nums = [1,1,1], k = 2
 *  Output: 2
 * Note:
 *  The length of the array is in range [1, 20,000].
 *  The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let all = 0
  for (let i = 0; i < nums.length; i ++) {
    let sum = 0
    for (let j = i; j < nums.length; j ++) {
      sum += nums[i]
      if (sum === k) {
        all ++
      }
    }
  }

  return all
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let all = 0
  
  let map = {0: 1}
  let sum = 0
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i]
    let count = map[sum - k]
    if (count) {
      all += count
    }

    map[sum] = (map[sum] ? map[sum] : 0) + 1 
  }

  return all
};

// 1 1 1
// 1 2
