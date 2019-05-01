/**
 * 461. Hamming Distance
 * 
 * https://leetcode.com/problems/hamming-distance/
 */

 /**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let diff = x ^ y
  let count = 0
  while (diff > 0) {
    
    if (diff & 1 === 1) count ++

    diff >> 1
  }  

  return count
};


var hammingDistance = function(x, y) {
  let diff = x ^ y

  diff = diff.toString(2)
  let count = 0
  for (let i = 0; i < diff.length; i ++) {
    if (diff[i] === '1') count ++
  }

  return count
};