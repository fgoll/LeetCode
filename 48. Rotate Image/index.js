/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length - 1
  
  for (let i = 0; i <= len >> 1; i ++) {
    let temp = matrix[i]
    matrix[i] = matrix[len - i]
    matrix[len - i] = temp
  }  

  for (let i = 0; i <= len; i ++) {
    for (let j = i + 1; j < matrix[i].length; j ++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  
};

rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],)