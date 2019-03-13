/**
 * 23. Merge k Sorted Lists
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 * 
 * Example:
 *  Input:
 *    [
 *      1->4->5,
 *      1->3->4,
 *      2->6
 *    ]
 *  Output: 1->1->2->3->4->4->5->6
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Time complexity : O(kN) where k is the number of linked lists. N is the total number of nodes
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let head = new ListNode(null), l = head
  lists = lists.filter(list => list)
  while (lists.length > 0) {
    let min = 0
    for (let i = 1; i < lists.length; i ++) {
      if (lists[min].val > lists[i].val) {
        min = i
      }
    }

    l.next = lists[min]
    l = l.next
    lists[min] = lists[min].next
    if (!lists[min]) {
      lists.splice(min, 1)
    }
  }

  return head.next
};

// ======================================== use priority queue ============================================

var __extends = (this && this.__extends) || (function () {
  var extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return function (d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var Vector = /** @class */ (function () {
  function Vector(elem) {
      elem = elem || [];
      this._elem = elem.slice();
  }
  Vector.prototype.length = function () {
      return this._elem.length;
  };
  Vector.prototype.uniquify = function () {
      var i = 0, j = 0;
      while (++j < this._elem.length) {
          if (this._elem[i] != this._elem[j]) {
              this._elem[++i] = this._elem[j];
          }
      }
      i++;
      this._elem.length = i;
      return j - i;
  };
  Vector.prototype.set = function (r, e) {
      this._elem[r] = e;
  };
  Vector.prototype.get = function (r) {
      return this._elem[r];
  };
  Vector.prototype.find = function (e, lo, hi) {
      while ((lo < hi--) && (e < this._elem[hi]))
          ;
      return hi;
  };
  Vector.prototype.search = function (e) {
      return this.find(e, 0, this._elem.length);
  };
  Vector.prototype.insert = function (r, e) {
      for (var i = this.length(); i > r; i--) {
          this._elem[i] = this._elem[i - 1];
      }
      this._elem[r] = e;
      return r;
  };
  Vector.prototype.removeIn = function (lo, hi) {
      if (lo == hi)
          return 0;
      while (hi < this.length())
          this._elem[lo++] = this._elem[hi++];
      this._elem.length = lo;
      return hi - lo;
  };
  Vector.prototype.remove = function (r) {
      var e = this._elem[r];
      this.removeIn(r, r + 1);
      return e;
  };
  Vector.prototype.heapSort = function () {
      var size = this.length();
      var H = new PQ_ComplHeap(this._elem, size);
      while (!H.empty()) {

          this._elem[--size] = H.delMax();
      }
  };
  return Vector;
}());
function inHeap(n, i) {
  return i >= 0 && i < n;
}
function parentVaild(i) {
  return i > 0;
}
function parent(i) {
  return (i - 1) >> 1;
}
function lastInternal(n) {
  return parent(n - 1);
}
function bigger(PQ, i, j) {
  return PQ[i] > PQ[j] ? i : j;
}
function lChild(i) {
  return 1 + (i << 1);
}
function rChild(i) {
  return (i + 1) << 1;
}
function rChildValid(n, i) {
  return inHeap(n, rChild(i));
}
function lChildValid(n, i) {
  return inHeap(n, lChild(i));
}
function properParent(PQ, n, i) {
  return rChildValid(n, i) ? bigger(PQ, bigger(PQ, i, lChild(i)), rChild(i)) :
      lChildValid(n, i) ? bigger(PQ, i, lChild(i)) : i;
}
var PQ_ComplHeap = /** @class */ (function (_super) {
  __extends(PQ_ComplHeap, _super);
  function PQ_ComplHeap(A, n) {
      var _this = _super.call(this, A) || this;
      if (n) {
          _this.heapify(n);
      }
      return _this;
  }
  PQ_ComplHeap.prototype.percolateDown = function (n, i) {
      var j;
      while (i != (j = properParent(this._elem, n, i))) {
          _a = [this._elem[j], this._elem[i]], this._elem[i] = _a[0], this._elem[j] = _a[1];
          i = j;
      }
      return i;
      var _a;
  };
  PQ_ComplHeap.prototype.percolateUp = function (i) {
      while (parentVaild(i)) {

          var j = parent(i);
          if (this._elem[i] <= this._elem[j])
              break;
          _a = [this._elem[j], this._elem[i]], this._elem[i] = _a[0], this._elem[j] = _a[1];
          i = j;
      }
      var _a;
  };
  PQ_ComplHeap.prototype.heapify = function (n) {
      for (var i = lastInternal(n); inHeap(n, i); i--) {
          this.percolateDown(n, i);
      }
  };
  PQ_ComplHeap.prototype.empty = function () {
      return this._elem.length === 0;
  };
  PQ_ComplHeap.prototype.insertH = function (e) {
      this.insert(this.length(), e);
      this.percolateUp(this.length() - 1);
  };
  PQ_ComplHeap.prototype.getMax = function () {
      return this._elem[0];
  };
  PQ_ComplHeap.prototype.delMax = function () {
      var maxElem = this._elem[0];
      if (this._elem.length > 1) {
          this._elem[0] = this._elem.pop();
          this.percolateDown(this.length(), 0);
      }
      else {
          this._elem.pop();
      }
      return maxElem;
  };
  return PQ_ComplHeap;
}(Vector));


/**
 * Time complexity: 
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists2 = function (lists) {
  let head = new ListNode(null), l = head

  let arr = []
  for (let i = 0; i < lists.length; i ++) {
    while (lists[i]) {
      arr.push(lists[i].val)
      lists[i] = lists[i].next
    }
  }

  let pq = new PQ_ComplHeap(arr, arr.length)
  arr = []
  
  while (!pq.empty()) {
    arr.push(pq.delMax())
  }

  for (let i = arr.length - 1; i >= 0; i --) {
    l.next = new ListNode(arr[i])
    l = l.next
  }

  return head.next
};

let l1 = new ListNode(1)
l1.next = new ListNode(4)
l1.next.next = new ListNode(5)
l1.next.next.next = new ListNode(7)

let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)
// l2.next.next.next = new ListNode(14)

let l3 = new ListNode(2)
l3.next = new ListNode(6)
l3.next.next = new ListNode(14)

let lists = [l1, l2, l3]

console.log(mergeKLists2(lists))