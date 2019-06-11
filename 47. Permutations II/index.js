/**
 * 47. Permutations II
 * 
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * 
 * Example:
 *  Input: [1,1,2]
 *  Output:
 *    [
 *      [1,1,2],
 *      [1,2,1],
 *      [2,1,1]
 *    ]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  var res = []

  nums.sort((a, b) => a - b)

  function backtrack(list, used) {
    if (list.length === nums.length) {
      res.push(list)
    }

    for (let i = 0; i < nums.length; i ++) {
      if (used[i] || (i > 0 && nums[i] === nums[i-1] && !used[i - 1])) continue
      used[i] = true
      backtrack([...list, nums[i]], used)
      used[i] = false
    }
  }
  
  backtrack([], [])
  return res
};