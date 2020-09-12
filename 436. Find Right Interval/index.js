/**
 * 436. Find Right Interval
 * 
 * https://leetcode.com/problems/find-right-interval/
 */

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  let res = [...Array(intervals.length)]

  let map = new Map()

  for (let i = 0; i < intervals.length; i ++) {
    map.set(intervals[i], i)
  }

  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i ++) {
    let min = Number.MAX_VALUE
    let minIndex = -1
    for (let j = i + 1; j < intervals.length; j ++) {
      if (intervals[j][0] >= intervals[i][1] && intervals[j][0] < min) {
        min = intervals[j][0]
        minIndex = map.get(intervals[j])
      }
    }
    res[map.get(intervals[i])] = minIndex
  }

  return res
};


var findRightInterval = function(intervals) {
  let res = [...Array(intervals.length)].map(_ => -1)

  let map = new Map()

  for (let i = 0; i < intervals.length; i ++) {
    map.set(intervals[i], i)
  }

  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i ++) {
    
    let l = i + 1, r = intervals.length - 1

    if (intervals[r][0] < intervals[i][1]) continue

    while (l < r) {
      let j = (l + r) >> 1
      if (intervals[j][0] < intervals[i][1]) {
        l = j + 1
      } else {
        r = j
      }
    }
    res[map.get(intervals[i])] = map.get(intervals[r])
  }

  return res
};