/**
 * 239. Sliding Window Maximum
 * 
 * https://leetcode.com/problems/sliding-window-maximum/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  if (nums.length === 0) return res
  for (let i = 0; i <= nums.length - k; i ++) {
    let max = nums[i]
    for (let j = i + 1; j < i + k; j ++) {

      max = Math.max(max, nums[j])
    }
    res.push(max)
  }

  return res
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow2 = function (nums, k) {
  let res = []
  if (nums.length === 0) return res
  let queue = []
  for (let i = 0; i < nums.length; i ++) {
    while (queue.length !== 0 && nums[i] > queue[queue.length - 1]) queue.pop()
    queue.push(nums[i])
    if (i - k + 1 >= 0) {
      let max = queue[0]
      res.push(max)
      if (max === nums[i - k - 1]) {
        queue.shift()
      }
    }
  }

  return res
};