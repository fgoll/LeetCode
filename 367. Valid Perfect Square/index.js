/**
 * 367. Valid Perfect Square
 * 
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 *  Input: 16
 *  Output: true
 * 
 * Example 2:
 *  Input: 14
 *  Output: false
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  
  function binSearch(lo, hi) {
    while (lo <= hi) {
      let mid = (lo + hi) >> 1
      let s = mid * mid
      if (s > num) {
        hi = mid - 1
      } else if (s < num) {
        lo = mid + 1
      } else {
        return num
      }
    }

    return -1
  }

  return binSearch(1, num) !== -1

};