/**
 * 37. Sudoku Solver
 * 
 * https://leetcode.com/problems/sudoku-solver/
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  if (!board || board.length === 0) return

  function solve() {
      for (let i = 0; i < board.length; i ++) {
        for (let j = 0; j < board[0].length; j ++) {
          if (board[i][j] === '.') {
            for (let w = 1; w <= 9; w++) {
              let word = w + ''
              if (isValid(i, j, word)) {
                board[i][j] = word
                if (solve(board)) return true;
                else board[i][j] = '.'
              }
            }
            return false;
          }
        }
      }    
      return true;
  }
  
  
  function isValid(row, col, w) {
    for (let i = 0; i < 9; i ++) {
      if (board[i][col] !== '.' && board[i][col] === w) return false;
      if (board[row][i] !== '.' && board[row][i] === w) return false;

      let cubeRowStart = Math.floor(row / 3) * 3
      let cubeColStart = Math.floor(col / 3) * 3

      let cubeRow = cubeRowStart + Math.floor(i / 3)
      let cubeCol = cubeColStart + Math.floor(i % 3)

      if (board[cubeRow][cubeCol] !== '.' && board[cubeRow][cubeCol] === w) return false;
    }

    return true;

  }
  
  solve()
};