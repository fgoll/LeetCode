/**
 * 223. Rectangle Area
 * 
 * https://leetcode.com/problems/rectangle-area/
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let left = Math.max(A, E)
  let right = Math.max(Math.min(C, G), left)
  let bottom = Math.max(B, F)
  let top = Math.max(Math.min(D, H), bottom)

  return (C - A) * (D - B) - (right - left) * (top - bottom) + (G - E) * (H - F)
};