/**
 * 260. Single Number III
 * 
 * Given an array of numbers nums, in which exactly two elements appear only once and 
 * all the other elements appear exactly twice. Find the two elements that appear only once.
 * 
 * Example:
 *  Input:  [1,2,1,3,2,5]
 *  Output: [3,5]
 * 
 * Note:
 *  The order of the result is not important. So in the above example, [5, 3] is also correct.
 *  Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let diff = 0
  // 所有数异或起来得到 a xor b 的结果
  for (let num of nums) {
    diff ^= num
  }

  // 制造分离因子
  diff &= -diff

  let res = [0, 0]

  for (let num of nums) {
    if ((num & diff) === 0) {
      res[0] ^= num
    }else {
      res[1] ^= num
    }
  }
  return res
};