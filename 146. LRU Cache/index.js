/**
 * 
 * Design and implement a data structure for Least Recently Used (LRU) cache. 
 * It should support the following operations: get and put.
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, 
 *                   it should invalidate the least recently used item before inserting a new item.
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 *  LRUCache cache = new LRUCache( 2 / capacity / );
 *  cache.put(1, 1);
 *  cache.put(2, 2);
 *  cache.get(1);       // returns 1
 *  cache.put(3, 3);    // evicts key 2
 *  cache.get(2);       // returns -1 (not found)
 *  cache.put(4, 4);    // evicts key 1
 *  cache.get(1);       // returns -1 (not found)
 *  cache.get(3);       // returns 3
 *  cache.get(4);       // returns 4
 */

var ListNode = function (key, val) {
  this.key = key
  this.val = val
  this.prev = null
  this.succ = null
}

var List = function () {
  this.header = new ListNode(null)
  this.tailer = new ListNode(null)
  this.header.succ = this.tailer
  this.tailer.prev = this.header
  this.size = 0

}

List.prototype.removeLast = function () {
  if (this.size === 0) return false
  let node = this.tailer.prev
  this.tailer.prev.prev.succ = this.tailer
  this.tailer.prev = this.tailer.prev.prev

  this.size--

  return node
}

List.prototype.move = function (node) {

  node.prev.succ = node.succ
  node.succ.prev = node.prev
  this.header.succ.prev = node
  // this.header.succ = node
  node.succ = this.header.succ
  this.header.succ = node
  node.prev = this.header


}

List.prototype.addNode = function (key, val) {
  let node = new ListNode(key, val)

  node.succ = this.header.succ
  this.header.succ.prev = node

  this.header.succ = node
  node.prev = this.header

  this.size++

  return node
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new List()
  this.table = {}
  this._capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.table[key]
  if (!node) return -1

  this.cache.move(node.node)
  return node.val

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

  if (this.table[key]) {
    this.table[key].node.val = value
    this.table[key].val = value
    this.cache.move(this.table[key].node)
    return
  }

  if (this.cache.size === this._capacity) {

    let node = this.cache.removeLast()
    this.table[node.key] = null
  }

  let node = this.cache.addNode(key, value)

  this.table[key] = {
    val: value,
    node: node
  }

};