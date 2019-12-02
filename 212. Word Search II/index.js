/**
 * 212. Word Search II
 * 
 * Given a 2D board and a list of words from the dictionary, find all words in the board.
 * 
 * Each word must be constructed from letters of sequentially adjacent cell, 
 * where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once in a word.
 * 
 * Example:
 *  Input: 
 *  board = [
 *    ['o','a','a','n'],
 *    ['e','t','a','e'],
 *    ['i','h','k','r'],
 *    ['i','f','l','v']
 *  ]
 *  words = ["oath","pea","eat","rain"]
 *  
 *  Output: ["eat","oath"]
 * 
 * Note:
 *  All inputs are consist of lowercase letters a-z.
 *  The values of words are distinct.
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
  */
  var findWords = function(board, words) {
    let res = []

    let root = buildTrie(words)

    for (let i = 0; i < board.length; i ++) {
      for (let j = 0; j < board[0].length; j ++) {
        dfs(board, i, j, root, res)
      }
    }
    return res
  };

  function dfs(board, i, j, p, res) {
    let c = board[i][j]
    let code = c.charCodeAt(0) - 'a'.charCodeAt(0)
    if (c === '#' || !p.next[code]) return
    p = p.next[code]

    if (p.word) {
      res.push(p.word)
      p.word = null 
    }

    board[i][j] = '#'
    if (i > 0) dfs(board, i - 1, j ,p, res) 
    if (j > 0) dfs(board, i, j - 1, p, res)
    if (i < board.length - 1) dfs(board, i + 1, j, p, res)
    if (j < board[0].length - 1) dfs(board, i, j + 1, p, res)
    board[i][j] = c
  }

  function TrieNode() {
    this.next = [...Array(26)]
    this.word = ''
  }

  function buildTrie(words) {
    let root = new TrieNode()
    for (let w of words) {
      let p = root
      for (let c of w.split('')) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0)
        if (!p.next[i]) p.next[i] = new TrieNode()
        p = p.next[i]
      }
      p.word = w
    }
    return root 
  }