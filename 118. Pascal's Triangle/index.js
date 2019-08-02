/**
 * 118. Pascal's Triangle
 * 
 * https://leetcode.com/problems/pascals-triangle/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  if (numRows === 0) return res
  
  res.push([1])

  for (let i = 1; i < numRows; i ++) {
    let row = []
    let prev = res[i-1]

    row.push(1)
    for (let j = 1; j < i; j ++) {
      row.push(prev[j-1] + prev[j])
    }
    row.push(1)

    res.push(row)
  }
  return res
};