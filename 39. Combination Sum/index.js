/**
 * 39. Combination Sum
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique 
 * combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 * 
 * Note:
 *  All numbers (including target) will be positive integers.
 *  The solution set must not contain duplicate combinations.
 * 
 * Example 1:
 *  Input: candidates = [2,3,6,7], target = 7,
 *  A solution set is:
 *  [
 *    [7],
 *    [2,2,3]
 *  ]
 * 
 * Example 2:
 *  Input: candidates = [2,3,5], target = 8,
 *  A solution set is:
 *  [
 *    [2,2,2,2],
 *    [2,3,3],
 *    [3,5]
 *  ]
 */

/**
 * T(n) = T(0) + T(1) + T(2) + T(n-1)
 * T(n+1) = [T(1) + T(1) + T(2) + T(n-1)] + T(n) = T(n) + T(n) = 2T(n)
 * T(n) = 2T(n-1) = 2 * 2 * T(n-2) = ... = 2^k * T(n-k) = 2^(n-1) * T(1)
 * T(n) ~ O(2^n)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []

  function backtrack(index, path, target) {
    if (target < 0) return
    if (target === 0) {
      res.push(path)
      return
    }

    for (let i = index; i < candidates.length; i++) {

      backtrack(i, [...path, candidates[i]], target - candidates[i])
    }
  }

  backtrack(0, [], target)

  return res
};

console.log(combinationSum([2, 3, 5, 6, 7], 7))