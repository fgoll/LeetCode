/**
 * 470. Implement Rand10() Using Rand7()
 * 
 * https://leetcode.com/problems/implement-rand10-using-rand7/
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  
  let row, col, idx

  do {
    row = rand7()
    col = rand7()

    idx = row + (col - 1) * 7
  } while(idx > 40)

  return 1 + (idx - 1) % 10
};