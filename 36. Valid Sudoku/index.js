/**
 * 36. Valid Sudoku
 * 
 * https://leetcode.com/problems/valid-sudoku/
 */

 /**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let map = {}

  for (let i = 1 ; i <= 9; i ++) {
    map[i] = 1
  }

  for (let i = 0; i < board.length; i ++) {
    let rows = {}
    let cols = {}
    let cube = {}
    
    for (let j = 0; j < board[i].length; j ++) {

      if (board[i][j] !== '.' && rows[board[i][j]]) return false
      if (board[j][i] !== '.' && cols[board[j][i]]) return false

      // 计算cube
      let cubeRowStart = Math.floor(i / 3) * 3
      let cubeColStart = Math.floor(i % 3) * 3

      let cubeRow = cubeRowStart + Math.floor(j / 3)
      let cubeCol = cubeColStart + Math.floor(j % 3)

      if (board[cubeRow][cubeCol] !== '.' &&
      cube[board[cubeRow][cubeCol]]) {
        return false
      }

      rows[board[i][j]] = 1
      cols[board[j][i]] = 1
      cube[board[cubeRow][cubeCol]] = 1
    }
  }

  return true
};