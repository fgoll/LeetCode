/**
 * 15. 3Sum
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * 
 * Note:
 *  The solution set must not contain duplicate triplets.
 * 
 * Example:
 *  Given array nums = [-1, 0, 1, 2, -1, -4],
 *  
 *  A solution set is:
 *  [
 *    [-1, 0, 1],
 *    [-1, -1, 2]
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let dict = {}
  nums.sort(function (a, b) {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })
  for (let i = 0; i < nums.length; i++) {
    dict[nums[i]] = i
  }
  let result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length; j++) {
      let a = nums[i]
      let b = nums[j]
      if (b === nums[j - 1] && j > i + 1) continue
      let c = 0 - a - b
      if (dict[c] !== undefined) {
        let index = dict[c]

        if (i < index && j < index) {
          result.push([a, b, c])
        }

      }

    }
  }
  return result
};

console.log(threeSum([0, 0, 0, 0]))


var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  
  let res = []    
  for (let i = 0; i < nums.length; i ++) {
      if (nums[i] > 0) return res
      if (i > 0 && nums[i] === nums[i - 1]) continue
      let l = i + 1
      let r = nums.length - 1

      while (l < r) {
          let sum = nums[l] + nums[r] + nums[i]

          if (sum === 0) {
              res.push([nums[l], nums[r], nums[i]])
              while (l < r && nums[l] == nums[l+1]) l ++
              while (l < r && nums[r] === nums[r-1]) r --
              l ++
              r --
          } else if (sum > 0) {
              r --
          } else {
              l ++
          }
      }
  }

  return res
};