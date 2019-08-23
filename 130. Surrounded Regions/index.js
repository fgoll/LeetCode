/**
 * 130. Surrounded Regions
 * 
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 * 
 * Example:
 *  X X X X
 *  X O O X
 *  X X O X
 *  X O X X
 *  
 * After running your function, the board should be:
 *  X X X X
 *  X X X X
 *  X X X X
 *  X O X X
 * 
 * Explanation:
 *  Surrounded regions shouldn’t be on the border, which means that any 'O' on the border 
 *  of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not 
 * connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if 
 * they are adjacent cells connected horizontally or vertically.
 */

// First, check the four border of the matrix. If there is a element is
// 'O', alter it and all its neighbor 'O' elements to '1'.

// Then ,alter all the 'O' to 'X'

// At last,alter all the '1' to 'O'

// X X X X           X X X X             X X X X
// X X O X  ->       X X O X    ->       X X X X
// X O X X           X 1 X X             X O X X
// X O X X           X 1 X X             X O X X

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

  let i, j
  let row = board.length

  if (!row) return

  let col = board[0].length

  for (let i = 0; i < row; i ++) {
    check(board, i, 0, row, col)
    if (col > 1) {
      check(board, i, col - 1, row, col)
    }
  }

  for (let j = 1; j < col - 1; j ++) {
    check(board, 0, j, row, col)
    if (row > 1) {
      check(board, row - 1, j, row, col)
    }
  }

  for (let i = 0; i < row; i ++) {
    for (let j = 0; j < col; j ++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }

      if (board[i][j] === '1') {
        board[i][j] = 'O'
      }
    }
  }

};

function check(board, i, j, row, col) {
  if (board[i][j] === 'O') {
    board[i][j] = '1'

    if (i > 1) {
      check(board, i - 1, j, row, col)
    }
    if (j > 1) {
      check(board, i, j - 1, row, col)
    }
    if (i + 1 < row) {
      check(board, i + 1, j, row, col)
    }
    if (j + 1 < col) {
      check(board, i, j + 1, row, col)
    }
  }
}