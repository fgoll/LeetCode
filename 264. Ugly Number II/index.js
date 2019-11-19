/**
 * 264. Ugly Number II
 * 
 * Write a program to find the n-th ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
 * 
 * Example:
 *  Input: n = 10
 *  Output: 12
 *  Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
 * 
 * Note:  
 *  1 is typically treated as an ugly number.
 *  n does not exceed 1690.
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let nums = [1]
  let i2 = 0
  let i3 = 0
  let i5 = 0

  while (nums.length < n) {
    let next2 = nums[i2] * 2
    let next3 = nums[i3] * 3
    let next5 = nums[i5] * 5
    let next = Math.min(next2, Math.min(next3, next5))

    if (next === next2) ++i2
    if (next === next3) ++i3
    if (next === next5) ++i5
    nums.push(next)
  }

  return nums[n-1]
};