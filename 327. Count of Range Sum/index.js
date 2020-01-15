/**
 * 327. Count of Range Sum
 * 
 * Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
 * Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.
 * 
 * Note:
 *  A naive algorithm of O(n2) is trivial. You MUST do better than that.
 * 
 * Example:
 *  Input: nums = [-2,5,-1], lower = -2, upper = 2,
 *  Output: 3 
 * 
 * Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  let first = [0]
  
  for (let num of nums) {
    first.push(first[first.length - 1] + num)
  }

  function sort(lo, hi) {
    let mid = (lo + hi) >> 1
    if (mid === lo) {
      return 0
    } 

    let count = sort(lo, mid) + sort(mid, hi)
    let i = j = mid

    for (let l = lo; l < mid; l ++) {
      let left = first[l]
      while (i < hi && first[i] - left < lower) i ++
      while (j < hi && first[j] - left <= upper) j ++
      count += (j - i) 
    }

    merge(lo, mid, hi)
    return count
  }
  return sort(0, first.length)
};

function merge(lo, mi, hi, arr) {
  var lb = mi - lo;
  var A = arr
  var B = arr.slice(lo, mi)
  var lc = hi - mi;
  for (var i = 0, j = 0, k = 0; (j < lb) || (k < lc);) {
    if ((j < lb) && (!(k < lc) || B[j] <= A[mi + k])) { A[lo + i] = B[j++]; i ++}
    if ((k < lc) && (!(j < lb) || A[mi + k] < B[j])) { A[lo + i] = A[mi + k]; i ++; k ++}
  }
}