/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * 
 * Given a n x n matrix where each of the rows and columns are sorted in ascending order, 
 * find the kth smallest element in the matrix.
 * 
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * 
 * Example:
 *  matrix = [
 *    [ 1,  5,  9],
 *    [10, 11, 13],
 *    [12, 13, 15]
 *  ],
 *  k = 8,
 *  return 13.
 * 
 * Note:
 *  You may assume k is always valid, 1 ≤ k ≤ n2.
 */

/**
 * 并不是一查到符合条件的值（小于等于该值的矩阵元素有k个）就返回，
 * 而是继续二分，直到上下界相等，然后返回此时的下界/上界，
 * 由于矩阵中均为整数，是可以保证查到的值在矩阵内且小于等于该值的矩阵元素恰好有k个的。
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] + 1 // [lo, hi)
  while (lo < hi) {
    let mid = lo + ((hi - lo) >> 1)

    let count = 0, j = matrix[0].length - 1

    for (let i = 0; i < matrix.length; i ++) {
      while (j >= 0 && matrix[i][j] > mid) j --
      count += (j + 1)
    }

    if (count < k) lo = mid + 1
    else hi = mid
  }

  return lo
};