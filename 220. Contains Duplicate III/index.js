/**
 * 220. Contains Duplicate III
 * 
 * Given an array of integers, find out whether there are two distinct 
 * indices i and j in the array such that the absolute difference between nums[i] and nums[j] is 
 * at most t and the absolute difference between i and j is at most k.
 * 
 * Example 1:
 *  Input: nums = [1,2,3,1], k = 3, t = 0
 *  Output: true
 * 
 * Example 2:
 *  Input: nums = [1,0,1,1], k = 1, t = 2
 *  Output: true
 * 
 * Example 3:
 *  Input: nums = [1,5,9,1,5,9], k = 2, t = 3
 *  Output: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (t < 0) return false


  let d = {}
  let w = t + 1
  for (let i = 0; i < nums.length; i ++) {
    let m = getID(nums[i], w) 
    
    if (d[m] !== undefined) {
      return true
    }

    if (d[m-1] !== undefined && Math.abs(nums[i] - d[m - 1]) < w) {
      return true
    }

    if (d[m+1] !== undefined && Math.abs(nums[i] - d[m + 1]) < w) {
      return true
    }

    d[m] = nums[i]

    if (i >= k) delete d[getID(nums[i - k], w)]
  }
  return false
};

function getID(x, w) {
  return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w)
}