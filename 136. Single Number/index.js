/**
 * 136. Single Number
 * 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example 1:
 *  Input: [2,2,1]
 *  Output: 1
 * 
 * Example 2:
 *  Input: [4,1,2,1,2]
 *  Output: 4
 */

 /**
  * the solution of without using extra memory
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = 0
  
  for (let num of nums) {
    a ^= num
  }

  return a
};


 /**
  * using hash table
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function(nums) {
  let dict = {}

  for (let num of nums) {
    if (!dict[num]) {
      dict[num] = 1
    }else {
      dict[num] ++
    }
  }

  for (let key in dict) {
    if (dict[key] === 1) return key
  }

  return 0
};