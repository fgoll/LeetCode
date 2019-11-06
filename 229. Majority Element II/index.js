/**
 * 229. Majority Element II
 * 
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
 * 
 * Example 1:
 *  Input: [3,2,3]
 *  Output: [3]
 * 
 * Example 2:
 *  Input: [1,1,1,3,3,2,2,2]
 *  Output: [1,2]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (!nums) return []

  let [count1, count2, candidate1, candidate2] = [0, 0, 0, 1]

  for (let i = 0; i < nums.length; i ++) {
    let n = nums[i]
    if (n === candidate1) {
      count1 += 1
    } else if (n === candidate2) {
      count2 += 1
    } else if (count1 === 0) {
      [candidate1, count1] = [n, 1]
    } else if (count2 === 0) {
      [candidate2, count2] = [n, 1]
    } else {
      [count1, count2] = [count1-1, count2-1]
    }
  }
  [count1, count2] = [0, 0]
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] === candidate1) {
      count1 ++
    } 
    if (nums[i] === candidate2) {
      count2 ++
    }
  }
  let res = []
  if (count1 > nums.length / 3) {
    res.push(candidate1)
  }
  if (count2 > nums.length / 3) {
    res.push(candidate2)
  }
  return res
};