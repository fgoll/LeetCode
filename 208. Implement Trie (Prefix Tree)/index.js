/**
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Example:
 *  Trie trie = new Trie();
 * 
 *  trie.insert("apple");
 *  trie.search("apple");   // returns true
 *  trie.search("app");     // returns false
 *  trie.startsWith("app"); // returns true
 *  trie.insert("app");   
 *  trie.search("app");     // returns true
 * 
 * Note:
 *  You may assume that all inputs are consist of lowercase letters a-z.
 *  All inputs are guaranteed to be non-empty strings.
 */

 /**
 * Initialize your data structure here.
 */

var Node = function() {
  this.end = false
  this.children = new Array(26).map(_ => null)
}

var Trie = function() {
  this.root = new Node()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root
  for (let i = 0; i < word.length; i ++) {
    let key = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (!node.children[key]) {
      node = node.children[key] = new Node()
    }else {
      node = node.children[key]
    }
    if (i === word.length - 1) {
      node.end = true
    }
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root
  for (let i = 0; i < word.length; i ++) {
    let key = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (!node.children[key]) return false
    node = node.children[key]
                         
    if (i === word.length - 1 && !node.end) {
      return false
    }
  }

  return true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root
  for (let i = 0; i < prefix.length; i ++) {
    let key = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (!node.children[key]) return false
    node = node.children[key]
  }
  return true
};


["Trie","insert","insert","insert","insert","insert","insert","search","search","search","search","search","search","search","search","search","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith"]
[[],["app"],["apple"],["beer"],["add"],["jam"],["rental"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"]]

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */