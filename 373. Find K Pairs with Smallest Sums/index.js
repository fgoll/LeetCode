/**
 * 373. Find K Pairs with Smallest Sums
 * 
 * You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
 * 
 * Define a pair (u,v) which consists of one element from the first array and one element from the second array.
 * 
 * Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.
 * 
 * Example 1:
 *  Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 *  Output: [[1,2],[1,4],[1,6]] 
 *  Explanation: The first 3 pairs are returned from the sequence: 
 *               [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 * 
 * Example 2:
 *  Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 *  Output: [1,1],[1,1]
 *  Explanation: The first 2 pairs are returned from the sequence: 
 *               [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 * 
 * Example 3:
 *  Input: nums1 = [1,2], nums2 = [3], k = 3
 *  Output: [1,3],[2,3]
 *  Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 */

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
  return PQ[i][0] < PQ[j][0] ? i : j;
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
          if (this._elem[i][0] >= this._elem[j][0])
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let pq = new PQ_ComplHeap([])
  function push(i, j) {
    if (i < nums1.length && j < nums2.length) {
      pq.insertH([nums1[i] + nums2[j], i, j])
    }
  }

  push(0, 0)
  let res = []
  while (!pq.empty() && res.length < k) {
    let [_, i, j] = pq.delMax()

    res.push(nums1[i], nums2[j])
    push(i, j + 1)
    if (j === 0) {
      push(i + 1, 0)
    }
  }
  return res
};