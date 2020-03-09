/**
 * 352. Data Stream as Disjoint Intervals
 * 
 * Given a data stream input of non-negative integers a1, a2, ..., an, ..., 
 * summarize the numbers seen so far as a list of disjoint intervals.
 * 
 * For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:
 *  [1, 1]
 *  [1, 1], [3, 3]
 *  [1, 1], [3, 3], [7, 7]
 *  [1, 3], [7, 7]
 *  [1, 3], [6, 7]
 * 
 * Follow up:
 *  What if there are lots of merges and the number of disjoint intervals are small compared to the data stream's size?
 */

/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
  this.arr = []
  this.cache = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  this.arr[val] = true
  this.modify = true
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  if (!this.modify) return this.cache
  this.modify = false
  let rtn = [], start = -1
  for (let i = 0; i <= this.arr.length; i++) {
    if (start == -1) {
      if (this.arr[i]) {
        start = i
        continue
      }
    } else {
      if (!this.arr[i]) {
        rtn.push([start, i - 1])
        start = -1
        continue
      }
    }
  }
  this.cache = rtn
  return rtn
};
/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

// -------------------------------------------------------- two -----------------------------------------------

var SummaryRanges = function () {
  this.intervals = []
};

SummaryRanges.prototype.searchL = function (val) {
  let lo = 0
  let hi = this.intervals.length - 1
  while (lo < hi) {
    let mid = lo + ((hi - lo + 1) >> 1)
    console.log(mid)
    if (this.intervals[mid][0] <= val) {
      lo = mid
    } else {
      hi = mid - 1
    }
  }
  return lo
}

SummaryRanges.prototype.searchR = function (val) {
  let lo = 0
  let hi = this.intervals.length - 1
  while (lo < hi) {
    let mid = lo + ((hi - lo) >> 1)
    if (this.intervals[mid][1] >= val) {
      hi = mid;
    } else {
      lo = mid + 1;
    }

  }
  return hi
}

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  if (!this.intervals.length) {
    this.intervals.push([val, val])
    return
  }

  let last = this.intervals[this.intervals.length - 1]
  let first = this.intervals[0]
  if (val > last[1]) {
    if (val === last[1] + 1) {
      last[1] = val
    } else {
      this.intervals.push([val, val])
    }
  } else if (val < first[0]) {

    if (val === first[0] - 1) {
      first[0] = val
    } else {
      this.intervals.unshift([val, val])
    }
  } else {
    let l = this.searchL(val)
    let r = this.searchR(val)
    // console.log('inert', val, 'l', l, 'r', r);
    if (l === r) return

     if (this.intervals[l][1] + 2 === this.intervals[r][0]) {
      this.intervals[l][1] = this.intervals[r][1]
      this.intervals.splice(r, 1)
    } else if (this.intervals[l][1] + 1 === val) {
      this.intervals[l][1] = val
    } else if (this.intervals[r][0] - 1 === val) {
      this.intervals[r][0] = val
    } else {
      this.intervals.splice(r, 0, [val, val])
    }
  }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  return this.intervals
};
/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */