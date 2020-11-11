/**
 * 460. LFU Cache
 * 
 * https://leetcode.com/problems/lfu-cache/
 */

function Node(key, val) {
  this.key = key
  this.val = val
  this.freq = 1
  this.prev = null
  this.next = null
}

function DLinkedList() {
  this.sentinel = new Node(null, null)
  this.sentinel.next = this.sentinel.prev = this.sentinel
  this.size = 0
}

DLinkedList.prototype.append = function(node) {
  node.next = this.sentinel.next
  node.prev = this.sentinel
  node.next.prev = node
  this.sentinel.next = node
  this.size ++
}

DLinkedList.prototype.pop = function(node) {
  if (!this.size) return
  if (!node) node = this.sentinel.prev

  node.prev.next = node.next
  node.next.prev = node.prev
  this.size --
  return node
}


/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.size = 0
  this.capacity = capacity
  this.node = {}
  this.freq = {}
  this.minfreq = 0
};

LFUCache.prototype.updated = function(node) {
  let freq = node.freq
  this.freq[freq] = this.freq[freq] || new DLinkedList()
  this.freq[freq].pop(node)
  if (this.minfreq === freq && this.freq[freq].size === 0) {
    this.minfreq += 1
  }
  node.freq += 1
  freq = node.freq
  this.freq[freq] = this.freq[freq] || new DLinkedList()
  this.freq[freq].append(node)

};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.node[key]) return -1

  const node = this.node[key]
  this.updated(node)
  return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) return

  if (this.node[key]) {
    const node = this.node[key]
    this.updated(node)
    node.val = value
  } else {
    if (this.capacity === this.size) {
      node = this.freq[this.minfreq].pop()
      delete this.node[node.key]
      this.size -- 
    }
    node = new Node(key, value)
    this.node[key] = node
    this.freq[1] = this.freq[1] || new DLinkedList()
    this.freq[1].append(node)
    this.minfreq = 1
    this.size ++ 
  }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */