/**
 * 216. Combination Sum III
 * 
 * Find all possible combinations of k numbers that add up to a number n, 
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
 * 
 * Note:
 *  All numbers will be positive integers.
 *  The solution set must not contain duplicate combinations.
 * 
 * Example 1:
 *  Input: k = 3, n = 7
 *  Output: [[1,2,4]]
 * 
 * Example 2:
 *  Input: k = 3, n = 9
 *  Output: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

  let res = []
  
  function backtrack(i, path, sum) {

    if (path.length === k ) {
      if (sum === n)
        res.push(path)
      return
    }

    for (let j = i; j <= 9; j ++) {
      backtrack(j+1, [...path, j], sum + j)
    }
  }

  backtrack(1, [], 0)

  return res
};
