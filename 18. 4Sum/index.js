/**
 * 18. 4Sum
 * 
 * Given an array nums of n integers and an integer target, are there elements a, b, c, 
 * and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * 
 * Note:
 *  The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 *  Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 *  
 *  A solution set is:
 *  [
 *    [-1,  0, 0, 1],
 *    [-2, -1, 1, 2],
 *    [-2,  0, 0, 2]
 *  ]
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  let map = {}
  for (let i = 0; i < nums.length; i ++) {
    if (map[nums[i]] === undefined) map[nums[i]] = [i]
    else map[nums[i]].push(i)
  }
  let res = []
  
  for (let i = 0; i < nums.length - 3; i ++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j ++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      for (let k = j + 1; k < nums.length - 1; k ++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue

        let zs = map[target - nums[i] - nums[j] - nums[k]] || []
        for (let z of zs) {
          if (z !== undefined && z > i && z > j && z > k) {
            res.push([nums[i], nums[j], nums[k], nums[z]])
            break
          }
        }
      }
    }
  }

  return res
};



 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
 
  let res = []
  
  for (let i = 0; i < nums.length - 3; i ++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j ++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
     
      let low = j + 1, high = nums.length - 1;

      while (low < high) {
        let sum = nums[i] + nums[j] + nums[low] + nums[high]

        if (sum === target) {
          res.push([nums[i], nums[j], nums[low], nums[high]])
          while (low < high && nums[low] === nums[low + 1]) low ++
          while (low < high && nums[high] === nums[high - 1]) high --
          low ++
          high --
        }else if (sum < target) {
          low ++
        }else {
          high --
        }
      }
    }
  }

  return res
};

