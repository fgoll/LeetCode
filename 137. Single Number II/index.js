/**
 * 137. Single Number II
 * 
 * Given a non-empty array of integers, every element appears three times except for one, 
 * which appears exactly once. Find that single one.
 * 
 * Note:
 *  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example 1:
 *  Input: [2,2,3,2]
 *  Output: 3
 * 
 * Example 2:
 *  Input: [0,1,0,1,0,1,99]
 *  Output: 99
 */

/**
 * https://www.youtube.com/watch?v=puXcQpwgcD0
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0]

  let res = 0

  for (let i = 0; i < 32; i ++) {
    let sum = 0
    for (let num of nums) {
      sum += (num >> i) & 1
      sum %= 3
    }
    res = res | (sum << i)
  }

  return res
};