/**
 * 211. Add and Search Word - Data structure design
 * 
 * Design a data structure that supports the following two operations:
 *  void addWord(word)
 *  bool search(word)
 * 
 * search(word) can search a literal word or a regular expression string 
 * containing only letters a-z or .. A . means it can represent any one letter.
 * 
 * Example:
 *  addWord("bad")
 *  addWord("dad")
 *  addWord("mad")
 *  search("pad") -> false
 *  search("bad") -> true
 *  search(".ad") -> true
 *  search("b..") -> true
 * 
 * Note:
 *  You may assume that all words are consist of lowercase letters a-z.
 */

 var Node = function() {
   this.children = [...Array(26)]
   this.item = ''
 }

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new Node()
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root

  for (let i = 0; i < word.length; i ++) {
    let c = word[i]
    let index = c.charCodeAt(0) - 'a'.charCodeAt(0)
    if (!node.children[index]) {
      node.children[index] = new Node()
    }
    node = node.children[index]
  }
  node.item = word
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return match(word, 0, this.root)
};

function match(word, k, node) {
  if (k === word.length) {
    return node.item !== ''
  }
  let index = word[k].charCodeAt(0) - 'a'.charCodeAt(0)
  if (word[k] !== '.') {
    return node.children[index] && match(word, k + 1, node.children[index])
  }else {
    for (let i = 0; i < node.children.length; i ++) {
      if (node.children[i]) {
        if (match(word, k + 1, node.children[i])) {
          return true
        }
      }
    }
  }
  return false
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */