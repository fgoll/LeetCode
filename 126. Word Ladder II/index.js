/**
 * 126. Word Ladder II
 * 
 * Given two words (beginWord and endWord), and a dictionary's word list, 
 * find all shortest transformation sequence(s) from beginWord to endWord, such that:
 *    1. Only one letter can be changed at a time
 *    2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 * 
 * Note:
 *    Return an empty list if there is no such transformation sequence.
 *    All words have the same length.
 *    All words contain only lowercase alphabetic characters.
 *    You may assume no duplicates in the word list.
 *    You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * Example 1:
 *  Input:
 *    beginWord = "hit",
 *    endWord = "cog",
 *    wordList = ["hot","dot","dog","lot","log","cog"]
 *  Output:
 *    [
 *      ["hit","hot","dot","dog","cog"],
 *      ["hit","hot","lot","log","cog"]
 *    ]
 * 
 * Example 2:
 *  Input:
 *    beginWord = "hit"
 *    endWord = "cog"
 *    wordList = ["hot","dot","dog","lot","log"]
 *  Output: []
 *    Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let dict = new Set(wordList)

  let res = []

  let nodeNeighbors = {} 
  let distance = {}
  let solution = []

  dict.add(beginWord)
  bfs(start, end, dict, nodeNeighbors, distance)
  dfs(start, end, dict, nodeNeighbors, distance, solution, res)

  return res
};

function bfs(start, end, dict, nodeNeighbors, distance) {
  for (let str of dict) {
    nodeNeighbors[str] = []
  }

  let queue = []
  queue.push(start)
  distance[start] = 0

  while (queue.length !== 0) {
    let count = queue.length

    let foundEnd = false

    for (let i = 0; i < count; i ++) {
      let cur = queue.shift()
      let curDistance = distance[cur]

      let neighbors = getNeighbors(cur, dict)

      for (let neighbor of neighbors) {
        nodeNeighbors[cur].push(neighbor)
        if (!distance[neighbor]) {
          distance[neighbor] = curDistance + 1
          if (end === neighbor) {
            foundEnd = true
          }else {
            queue.push(neighbor)
          }
        }
      }

      if (foundEnd) break
    }
  }
}

function getNeighbors(node, dict) {
  let res = []
  let chs = node.split('')
  for (var j = 0; j < 26; j++) {
    let ch = String.fromCharCode(97 + j);

    for (let i = 0; i < chs.length; i ++) {
      if (chs[i] === ch) continue
      let oldCh = chs[i]
      chs[i] = ch
      if (dict[chs.join('')]) {
        res.push(chs.join(''))
      }
      chs[i] = oldCh
    }
  }

  return res
}

function dfs(cur, end, dict, nodeNeighbors, distance, solution, res) {
  solution.push(cur)

  if (cur === end) {
    res.push(solution)
  }else {
    for (let next of nodeNeighbors[cur]) {
      if (distance[next] === distance[cur] + 1) {
        dfs(next, end, dict, nodeNeighbors, distance, solution, res)
      }
    }
  }
}