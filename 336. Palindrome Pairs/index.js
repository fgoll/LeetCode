/**
 * 336. Palindrome Pairs
 * 
 * Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, 
 * so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.
 * 
 * Example 1:
 *  Input: ["abcd","dcba","lls","s","sssll"]
 *  Output: [[0,1],[1,0],[3,2],[2,4]] 
 *  Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * Example 2:
 *  Input: ["bat","tab","cat"]
 *  Output: [[0,1],[1,0]] 
 *  Explanation: The palindromes are ["battab","tabbat"]
 */

function isPalindrome(word, i, j) {
  while (i < j) {
    if (word[i++] !== word[j--]) return false
  }
  return true
}

function TrieNode() {
  this.next = [...Array(26)]
  this.index = -1
  this.list = []
}

function addWord(root, word, index) {
  for (let i = word.length - 1; i >= 0; i --) {
    let j = word.charCodeAt(i) - 'a'.charCodeAt(0)
    if (!root.next[j]) {
      root.next[j] = new TrieNode()
    }

    if (isPalindrome(word, 0, i)) {
      root.list.push(index)
    }

    root = root.next[j]
  }

  root.list.push(index)
  root.index = index
}

function search(words, i, root, res) {
      
    
  for (let j = 0; j < words[i].length; j ++) {

    if (root.index >= 0 && root.index !== i && isPalindrome(words[i], j, words[i].length - 1)) {
      res.push([i, root.index])
    }
    root = root.next[words[i].charCodeAt(j) - 'a'.charCodeAt(0)]
    if (!root) return
  }

  for (let j of root.list) {
    if (i === j) continue
    res.push([i, j])
  }
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let res = []
  let root = new TrieNode()

  for (let i = 0; i < words.length; i ++) {
    addWord(root, words[i], i)
  }

  for (let i = 0; i < words.length; i ++) {
    search(words, i, root, res)
  }

  return res
};