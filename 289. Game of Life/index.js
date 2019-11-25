/**
 * 289. Game of Life
 * 
 * https://leetcode.com/problems/game-of-life/
 */

/**
 * 
 * [2nd bit, 1st bit] = [next state, current state]
 *  - 00  dead (next) <- dead (current)
 *  - 01  dead (next) <- live (current)  
 *  - 10  live (next) <- dead (current)  
 *  - 11  live (next) <- live (current) 
 * 
 * For each cell's 1st bit, check the 8 pixels around itself, and set the cell's 2nd bit.
 *  Transition 01 -> 11: when board == 1 and lives >= 2 && lives <= 3.
 *  Transition 00 -> 10: when board == 0 and lives == 3.
 * 
 * To get the current state, simply do
 *  board[i][j] & 1
 * To get the next state, simply do
 *  board[i][j] >> 1
 * 
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if (!board || !board.length) return

  let m = board.length, n = board[0].length

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      let lives = liveNeighbors(board, m, n, i, j)
      if (board[i][j] === 1 && lives >= 2 && lives <= 3) {
        board[i][j] = 3
      }
      if (board[i][j] === 0 && lives === 3) {
        board[i][j] = 2
      } 
    }
  }

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      board[i][j] >>= 1
    }
  }

};

function liveNeighbors(board, m, n, i, j) {
  let lives = 0
  for (let x = Math.max(i-1, 0); x <= Math.min(m-1, i+1); x ++) {
    for (let y = Math.max(j-1, 0); y <= Math.min(n-1, j+1); y ++) {
      lives += board[x][y] & 1
    }
  }
  lives -= board[i][j] & 1;
  return lives
}