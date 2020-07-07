/**
 * 407. Trapping Rain Water II
 * 
 * https://leetcode.com/problems/trapping-rain-water-ii/
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
  return PQ[i].height < PQ[j].height ? i : j;
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
          if (this._elem[i].height >= this._elem[j].height)
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


function Cell(row, col, height) {
  this.row = row
  this.col = col
  this.height = height
}

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heights) {
  if (!heights || !heights.length || !heights[0].length) return 0

  let queue = new PQ_ComplHeap()

  let m = heights.length;
  let n = heights[0].length;

  let visited = [...Array(m)].map(_ => [...Array(n)].map(_ => false))
  
  for (let i = 0; i < m; i ++) {
    visited[i][0] = true;
    visited[i][n - 1] = true;
    queue.insertH(new Cell(i, 0, heights[i][0]))
    queue.insertH(new Cell(i, n-1, heights[i][n-1]))
  }

  for (let i = 0; i < n; i ++) {
    visited[0][i] = true
    visited[m-1][i] = true
    queue.insertH(new Cell(0, i, heights[0][i]))
    queue.insertH(new Cell(m-1, i, heights[m-1][i]))
  }

  let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  let res = 0
  while(!queue.empty()) {
    let cell = queue.delMax()

    for (let dir of dirs) {
      let row = cell.row + dir[0]
      let col = cell.col + dir[1]
      if (row >= 0 && row < m && col >= 0 && col < n && !visited[row][col]) {
        visited[row][col] = true
        res += Math.max(0, cell.height - heights[row][col])
        queue.insertH(new Cell(row, col, Math.max(heights[row][col], cell.height)))
      }
    }
  }
  return res
};