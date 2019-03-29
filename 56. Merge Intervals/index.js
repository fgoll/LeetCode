/**
 * 56. Merge Intervals
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 *  Input: [[1,3],[2,6],[8,10],[15,18]]
 *  Output: [[1,6],[8,10],[15,18]]
 *  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 * Example 2:
 *  Input: [[1,4],[4,5]]
 *  Output: [[1,5]]
 *  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */



function Interval(start, end) {
  this.start = start;
  this.end = end;
}

function compare(a, b) {
  if (a.start > b.start) return 1
  else if (a.start < b.start) return -1
  else return 0
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {

  if (intervals.length === 0) return []

  quickSort(intervals, 0, intervals.length, compare);
  // intervals.sort(compare);

  let res = [intervals[0]]

  for (let i = 1; i < intervals.length; i ++) {
    let prev = res[res.length - 1];
    let cur = intervals[i]

    if (prev.end >= cur.start) {
      prev.end = prev.end >  cur.end ? prev.end : cur.end
    }else {
      res.push(intervals[i])
    }
  }

  return res;
};

function quickSort(A, lo, hi, compare) {
  if (hi - lo < 2) return;

  let mi = partition(A, lo, hi - 1, compare);

  quickSort(A, lo, mi, compare);
  quickSort(A, mi + 1, hi, compare);
}

function partition(A, lo, hi, compare) {
  let pivot = A[lo];

  while (lo < hi) {
    while ((lo < hi) && (compare(A[hi], pivot) >= 0)) hi --;
    A[lo] = A[hi];
    while ((lo < hi) && (compare(A[lo], pivot) <= 0)) lo ++;
    A[hi] = A[lo];
  }
  A[lo] = pivot;
  return lo
}

console.log(merge([new Interval(1,4), new Interval(0,4)]))