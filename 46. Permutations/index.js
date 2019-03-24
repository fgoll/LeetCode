/**
 * 46. Permutations
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 *  Input: [1,2,3]
 *  Output:
 *    [
 *      [1,2,3],
 *      [1,3,2],
 *      [2,1,3],
 *      [2,3,1],
 *      [3,1,2],  
 *      [3,2,1]
 *    ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  function backtrack(list) {
    if (list.length === nums.length) {
      return res.push(list)
    }

    for (let i = 0; i < nums.length; i ++) {
      if (list.indexOf(nums[i]) > -1) continue
      list.push(nums[i])
      backtrack([...list])
      list.pop()
    }
  }

  backtrack([])
  return res
};

console.log(permute([1,2,3]))