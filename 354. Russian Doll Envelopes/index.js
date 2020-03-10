/**
 * 354. Russian Doll Envelopes
 * 
 * You have a number of envelopes with widths and heights given as a pair of integers (w, h). 
 * One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.
 * 
 * What is the maximum number of envelopes can you Russian doll? (put one inside other)
 * 
 * Note:
 *  Rotation is not allowed.
 * 
 * Example:
 *  Input: [[5,4],[6,4],[6,7],[2,3]]
 *  Output: 3 
 *  Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
 */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  // 以 width 升序 height 降序排列 之后 问题转换为 求height 的最长上升子序列
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })

  // 300. Longest Increasing Subsequence
  let dp = []
  let max = 0
  for (let i = 0; i < envelopes.length; i ++) {
    dp[i] = 1
    for (let j = 0; j < i; j ++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(dp[i], max)
  }

  return max
};



function binSearch(nums, lo, hi, e) {

  while (lo < hi) {
    let mid = (lo + hi) >> 1
    if (e <= nums[mid]) {
        hi = mid
    }else {
        lo = mid + 1
    } 
  }

  return lo
}
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })

  let dp = [] 
  let max = 0
  for (let envelope of envelopes) {
    let i = binSearch(dp, 0, max, envelope[1]);
    if (i < 0) {
        i = -(i + 1);
    }
    dp[i] = envelope[1];
    if (i == max) {
        max++;
    }
  }
  return max
};