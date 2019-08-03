/**
 * 119. Pascal's Triangle II
 * 
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = [...Array(rowIndex+1)].map(_ => 0)
  res[0] = 1
  for (let i = 1; i <= rowIndex; i ++) {
    for (let j = i; j >= 1; j --) {
      res[j] += res[j-1]
    }
  }

  return res
};

// res  [1,0,0,0]
//  i  1  2 3

//  j  1-1  res [1, 1, 0, 0]
//  j  2-1  res [1, 2, 1, 0]
//  j  3-1  res [1, 3, 3, 1]  




