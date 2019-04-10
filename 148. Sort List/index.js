/**
 * 148. Sort List
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
 * Example 1:
 *  Input: 4->2->1->3
 *  Output: 1->2->3->4
 * 
 * Example 2:
 *  Input: -1->5->3->4->0
 *  Output: -1->0->3->4->5
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let heap = new Heap(arr)
  head = new ListNode(null)
  let point = head
  while (heap._size !== 0) {
    let val = heap.delMax()
    let node = new ListNode(val)
    
    node.next = head.next 

    head.next = node
  }  

  return head.next
};

function InHeap(n, i) { return i >= 0 && i < n }
function Parent(i) { return (i - 1) >> 1 }
function LastInternal(n) { return Parent(n - 1) }
function LChild(i) { return 1 + (i << 1) }
function RChild(i) { return (1 + i) << 1 }
function ParentVaild(i) { return i > 0 }
function LChildVaild(n, i) { return InHeap(n, LChild(i)) }
function RChildVaild(n, i) { return InHeap(n, RChild(i)) }
function Bigger(pq, i, j) { return (pq[i] < pq[j] ? j : i) }
function ProperParent(pq, n, i) { return (RChildVaild(n, i) ? Bigger(pq, Bigger(pq, i, LChild(i)), RChild(i)) :
                                                              (LChildVaild(n, i) ? Bigger(pq, i, LChild(i)) : i) ) }

function Heap(A) {
  if (A) {
    this._elem = A.slice()
  }else {
    this._elem = []
  }
  this._size = this._elem.length
  this.heapify(this._size)
}

Heap.prototype.delMax = function() {
  let maxElem = this._elem[0] 
  this._elem[0] = this._elem[--this._size]
  this.percolateDown(this._size, 0)
  return maxElem
}

Heap.prototype.percolateDown = function(n, i) {
  let j
  while (i != (j = ProperParent(this._elem, n, i))) {
    let temp = this._elem[i]
    this._elem[i] = this._elem[j]
    this._elem[j] = temp
    i = j
  }

  return i
}

Heap.prototype.percolateUp = function(i) {
  while (ParentVaild(i)) {
    let j = Parent(i)
    if (this._elem[i] < this._elem[j]) break
    let temp = this._elem[i]
    this._elem[i] = this._elem[j]
    this._elem[j] = temp
  }

  return i
}

Heap.prototype.heapify = function(n) {
  for (let i = LastInternal(n); InHeap(n, i); i--) {
    this.percolateDown(n, i)
  }
}