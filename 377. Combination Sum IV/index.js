/**
 * 377. Combination Sum IV
 * 
 * Given an integer array with all positive numbers and no duplicates, 
 * find the number of possible combinations that add up to a positive integer target.
 * 
 * Example:
 *  nums = [1, 2, 3]
 *  target = 4
 * 
 *  The possible combination ways are:
 *  (1, 1, 1, 1)
 *  (1, 1, 2)
 *  (1, 2, 1)
 *  (1, 3)
 *  (2, 1, 1)
 *  (2, 2)
 *  (3, 1)
 * 
 *  Note that different sequences are counted as different combinations.
 * 
 *  Therefore the output is 7.
 * 
 * Follow up:
 *  What if negative numbers are allowed in the given array?
 *  How does it change the problem?
 *  What limitation we need to add to the question to allow negative numbers?
 * 
 * Credits:
 *  Special thanks to @pbrother for adding this problem and creating all test cases.
 */

/**
 * dp[i] ：对于给定的由正整数组成且不存在重复数字的数组，和为 i 的组合的个数。
 * dp[i] = sum{dp[i - num] for num in nums and if i >= num}
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let dp = [...Array(nums.length+1)].map(_ => 0)
    dp[0] = 1

    for (let i = 1; i <= target; i ++) {
      for (let num of nums) {
        if (num <= i)
          dp[i] = dp[i-num] + dp[i]
      }
      
    }

    return dp[target]
};