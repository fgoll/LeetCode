/**
 * 258. Add Digits
 * 
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * 
 * Example:
 *  Input: 38
 *  Output: 2 
 *  Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 *               Since 2 has only one digit, return it.
 * 
 * Follow up:
 *  Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * formula
 *           /  0             (n == 0)
 *  dr(n) = { 9               (n != 0 && n % 9 == 0)
 *           \ n % 9          (n % 9 != 0)
 * equals to 
 *  dr(n) = 1 + (n - 1) % 9
 * 
 *  http://www.flyingcoloursmaths.co.uk/a-neat-number-trick-digital-roots-and-modulo-9-arithmetic/
 * 
 * Let's take a number like 12345. That's the same as 1 × 10,000 + 2 × 1,000 + 3 × 100 + 4 × 10 + 5.
 * Now, 10 is 9 + 1; 100 is 99 + 1, and so on. So let's rewrite:
 * 12,345 = 1 × (9,999 + 1) + 2 × (999 + 1) + 3 × (99 + 1) + 4 × (9 + 1) + 5.
 * Multiply out the brackets and rearrange a bit; you get:
 * 12,345 = (1 × 9,999 + 2 × 999 + 3 × 99 + 4 × 9) + (1 + 2 + 3 + 4 + 5).
 * 
 * 
 * 
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return 1 + (num - 1) % 9
};