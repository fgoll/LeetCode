/**
 * 79. Word Search
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell, 
 * where "adjacent" cells are those horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 * 
 * Example:
 *  board = [
 *    ['A','B','C','E'],
 *    ['S','F','C','S'],
 *    ['A','D','E','E']
 *  ]
 *  Given word = "ABCCED", return true.
 *  Given word = "SEE", return true.
 *  Given word = "ABCB", return false.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let index = 0;
  if (board.length === 0) return
  let row = board.length,
    col = board[0].length;

  for (let i = 0; i < board.length; i++) {
    let boardRow = board[i]
    for (let j = 0; j < boardRow.length; j++) {
      if (boardRow[j] === word[index]) {
        if (search('', i, j, 0)) return true
      }
    }
  }

  function search(str, i, j, index) {
    if (str === word) return true

    if (index === word.length) return false

    if (i < 0 || j < 0 || j >= col || i >= row) return false

    if (str[index - 1] === word[index - 1]) {
      let c = board[i][j]
      board[i][j] = '#'
      let res = search(str + c, i - 1, j, index + 1) ||
        search(str + c, i + 1, j, index + 1) ||
        search(str + c, i, j + 1, index + 1) ||
        search(str + c, i, j - 1, index + 1)
      board[i][j] = c
      return res
    }

    return false

  }

  return false
};


console.log(exist([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], 'ABCCED'))