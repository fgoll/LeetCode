/**
 * 473. Matchsticks to Square
 * 
 * https://leetcode.com/problems/matchsticks-to-square/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {

  if (!nums || !nums.length) return false

  let total = nums.reduce((prev, curr) => prev + curr, 0)
  let side = total / 4

  if (side * 4 !== total) return false

  let sums = [0, 0, 0, 0]

  return dfs(0, side, nums, sums)

};

function dfs(index, side, nums, sums) {
  if (index === nums.length) {
    return sums[0] === sums[1] && sums[1] === sums[2] && sums[2] === sums[3]
  }

  let element = nums[index]

  for (let i = 0; i < 4; i ++) {
    if (sums[i] + element <= side) {
      sums[i] += element
      if (dfs(index+1, side, nums, sums)) return true
      sums[i] -= element
    }
  }
  return false
}