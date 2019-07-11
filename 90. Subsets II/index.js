/**
 * 90. Subsets II
 * 
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 *  Input: [1,2,2]
 *  Output:
 *  [
 *    [2],
 *    [1],
 *    [1,2,2],
 *    [2,2],
 *    [1,2],
 *    []
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort(a, b => b - a)
  let result = [[]]
  let startIndex = 0, size = 0
  for (let i = 0; i < nums.length; i++) {
    startIndex = i >= 1 && nums[i] === nums[i-1] ? size : 0
    size = result.length
    let num = nums[i]
    for (let j = startIndex; j < size; j ++) {
      let subset = [...result[j]]
      subset.push(num)
      result.push(subset)
    }
  }

  return result  
};