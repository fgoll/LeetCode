/**
 * 78. Subsets
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 *  Input: nums = [1,2,3]
 *  Output:
 *  [[3],
 *    [1],
 *    [2],
 *    [1,2,3],
 *    [1,3],
 *    [2,3],
 *    [1,2],
 *    []]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]]
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let size = result.length
    for (let j = 0; j < size; j ++) {
      let subset = [...result[j]]
      subset.push(num)
      result.push(subset)
    }
  }

  return result
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function (nums) {
  let result = []
  
  function backtrack(subset, j) {
    result.push(subset)
    for (let i = j; i < nums.length; i ++) {
      backtrack([...subset, nums[i]], i + 1)
    }
  }

  backtrack([], 0)
  return result
};
console.log(subsets2([1,2,3]))