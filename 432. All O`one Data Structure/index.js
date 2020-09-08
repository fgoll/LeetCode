/**
 * 432. All O`one Data Structure
 * 
 * Implement a data structure supporting the following operations:
 * 
 *  Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. 
 * Key is guaranteed to be a non-empty string.
 *  Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. 
 * If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
 *  GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
 *  GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
 *  
 * Challenge: Perform all these in O(1) time complexity.
 */

/**
 * Initialize your data structure here.
 */
var AllOne = function() {
  this.dict = new Map()
  this.heapMin = []
  this.heapMax = []
};

var heapSwap = function(heap, index1, index2) {
  let temp = heap[index1];
  heap[index1] = heap[index2];
  heap[index2] = temp;
  heap[index1].index = index1;
  heap[index2].index = index2;
}

var heapMoveUp = function(heap, index) {
  while (index > 0 && heap[~~(index/2)].key > heap[index].key) {
      // swap
      heapSwap(heap, index, ~~(index/2));
      index = ~~(index/2);
  }
}
var heapMoveDown = function(heap, index) {
  let leftChild = index*2;
  let rightChild = index*2+1;
  if (leftChild < heap.length && heap[leftChild].key < heap[index].key) {
      heapSwap(heap, index, leftChild);
      heapMoveDown(heap, leftChild);
  }
  if (rightChild < heap.length && heap[rightChild].key < heap[index].key) {
      heapSwap(heap, index, rightChild);
      heapMoveDown(heap, rightChild);
  }
}
var heapAdd = function(heap, heapNode) {
  // heapNode.key === 0
  heap.push(heapNode);
  heap[heap.length-1].index = heap.length-1;
  heapSwap(heap, 0, heap.length-1);
  heapMoveUp(heap, heap.length-1);
  heapMoveDown(heap, 0);
}

var heapRemove = function(heap, index) {
  if (heap.length === 0) return;
  if (heap.length === 1) heap.pop();
  if (heap.length >= 2) {
      heapSwap(heap, index, heap.length-1);
      heap.pop();
      if (index < heap.length) {
          heapMoveUp(heap, index);
          heapMoveDown(heap, index);    
      }
  }
}

AllOne.prototype.inc = function(key) {
  if (!this.dict.has(key)) {
      //heapMin add (0, key)
      let heapMinNode = {key: 0, index: 0, meta: key};
      heapAdd(this.heapMin, heapMinNode);
      //heapMax add (0, key)
      let heapMaxNode = {key: 0, index: 0, meta: key};
      heapAdd(this.heapMax, heapMaxNode);
      this.dict.set(key,
                    {heapMinNode: heapMinNode, 
                     heapMaxNode: heapMaxNode}
                   );
  }
  let dictValue = this.dict.get(key);
  dictValue.heapMinNode.key++;
  heapMoveDown(this.heapMin, dictValue.heapMinNode.index);
  dictValue.heapMaxNode.key--;
  heapMoveUp(this.heapMax, dictValue.heapMaxNode.index);
  this.dict.set(key, dictValue);
  
  //console.log("inc, min,max");
  //console.log(this.heapMin);
  //console.log(this.heapMax);
};

/**
* Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
* @param {string} key
* @return {void}
*/
AllOne.prototype.dec = function(key) {
  let dictValue = this.dict.get(key);
  if (dictValue) {
      dictValue.heapMinNode.key--;
      heapMoveUp(this.heapMin, dictValue.heapMinNode.index);
      dictValue.heapMaxNode.key++;
      heapMoveDown(this.heapMax, dictValue.heapMaxNode.index);
      this.dict.set(key, dictValue);
      if (this.dict.get(key).heapMinNode.key == 0) {
          heapRemove(this.heapMin, dictValue.heapMinNode.index);
          heapRemove(this.heapMax, dictValue.heapMaxNode.index);
          this.dict.delete(key);
      }    
  }
  
  // console.log("dec, min,max");
  // console.log(this.heapMin);
  // console.log(this.heapMax);
};

/**
* Returns one of the keys with maximal value.
* @return {string}
*/
AllOne.prototype.getMaxKey = function() {
  //console.log(this.heapMax);
  if (this.heapMax.length > 0) {
      return this.heapMax[0].meta;
  } else {
      return "";
  }
};

/**
* Returns one of the keys with Minimal value.
* @return {string}
*/
AllOne.prototype.getMinKey = function() {
  //
  if (this.heapMin.length > 0) {
      return this.heapMin[0].meta;    
  } else {
      return "";
  }
};
/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */