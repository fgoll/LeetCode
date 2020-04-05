/**
 * 	308. Range Sum Query 2D - Mutable
 */

// 给你一个 2D 矩阵 matrix，请计算出从左上角 (row1, col1) 到右下角 (row2, col2) 组成的矩形中所有元素的和。


// 上述粉色矩形框内的，该矩形由左上角 (row1, col1) = (2, 1) 和右下角 (row2, col2) = (4, 3) 确定。其中，所包括的元素总和 sum = 8。

// 示例：

// 给定 matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// update(3, 2, 2)
// sumRegion(2, 1, 4, 3) -> 10
//  

// 注意:

// 矩阵 matrix 的值只能通过 update 函数来进行修改
// 你可以默认 update 函数和 sumRegion 函数的调用次数是均匀分布的
// 你可以默认 row1 ≤ row2，col1 ≤ col2

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return;
  }
  this.rowCount = matrix.length
  this.colCount = matrix[0].length

  let rowSumArr = [...Array(this.rowCount)].map(_ => [...Array(this.colCount)]) // 保存每个元素(i, j)在第i行的前j+1项的和。
  for (let i = 0; i < this.rowCount; i ++) {
    rowSumArr[i][0] = this.matrix[i][0]
    for (let j = 1; j < this.colCount; j ++) {
      rowSumArr[i][j] = rowSumArr[i][j-1] + this.matrix[i][j]
    }
  }
  this.rowSumArr = rowSumArr

};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  this.matrix[row][col] = val
  let fromCol = col
  if (col === 0) {
    this.rowSumArr[row][col] = val
    fromCol += 1
  }
  for (let i = fromCol; i < this.colCount; i ++) {
    this.rowSumArr[row][i] = this.rowSumArr[row][i-1] + this.matrix[row][i]
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0

  for (let i = row1; i <= row2; i ++) {
    sum += col1 === 0 ? this.rowSumArr[i][col2] : this.rowSumArr[i][col2] - this.rowSumArr[i][col1-1]
  }

  return sum
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */