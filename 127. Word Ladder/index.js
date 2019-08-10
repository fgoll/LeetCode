/**
 * 127. Word Ladder
 * 
 * https://leetcode.com/problems/word-ladder/
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let l = beginWord.length
  let map = {}

  for (let i = 0; i < wordList.length; i ++) {
    const word = wordList[i]

    for (let j = 0; j < l; j ++) {
      let newWord = word.substring(0, j) + "*" + word.substring(j+1, l)
      let trans = map[newWord] || []
      trans.push(word)
      map[newWord] = trans
    }
  }

  let q = []
  q.push([beginWord, 1])
  let visited = {}
  visited[beginWord] = true

  while (q.length !== 0) {
    let [word, level] = q.shift()
    
    for (let i = 0; i < l; i ++) {
      let newWord = word.substring(0, i) + '*' + word.substring(i+1, l)

      let trans = map[newWord] || []

      for (let j = 0; j < trans.length; j ++) {
        if (trans[j] === endWord) return level + 1

        if (!visited[trans[j]]) {
          q.push([trans[j], level+1])
          visited[trans[j]] = true
        }
      }
    }
  }

  return 0;
};