/**
 * 365. Water and Jug Problem
 * 
 * You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. 
 * You need to determine whether it is possible to measure exactly z litres using these two jugs.
 * 
 * If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.
 * 
 * Operations allowed:
 *  Fill any of the jugs completely with water.
 *  Empty any of the jugs.
 *  Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
 * 
 * Example 1: (From the famous "Die Hard" example)
 *  Input: x = 3, y = 5, z = 4
 *  Output: True
 * 
 * Example 2:
 *  Input: x = 2, y = 6, z = 5
 *  Output: False
 */

/**
 * 
 * Bézout's identity (also called Bézout's lemma) is a theorem in the elementary theory of numbers:
 * let a and b be nonzero integers and let d be their greatest common divisor. Then there exist integers x and y such that ax+by=d
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  let gcd = function(a, b) {
    if (b === 0) return a
    let r = a % b
    return gcd(b, r)
  }  

  if (x + y < z) return false

  if (x === z || y === z || x + y === z) return true

  let d = gcd(x, y)
  return z % d === 0
};