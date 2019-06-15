/**
 * 57. Insert Interval
 *
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example 1:
 *  Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 *  Output: [[1,5],[6,9]]
 *
 * Example 2:
 *  Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 *  Output: [[1,2],[3,10],[12,16]]
 *  Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 * NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */
package insert

import "math"

func insert(intervals [][]int, newInterval []int) [][]int {
	var res [][]int

	for _, interval := range intervals {
		if newInterval == nil || interval[1] < newInterval[0] {
			res = append(res, interval)
		} else if interval[0] > newInterval[1] {
			res = append(res, newInterval)
			res = append(res, interval)
			newInterval = nil
		} else {
			newInterval[0] = int(math.Min(float64(newInterval[0]), float64(interval[0])))
			newInterval[1] = int(math.Max(float64(newInterval[1]), float64(interval[1])))
		}
	}

	if (newInterval != nil) {
		res = append(res, newInterval)
	}

	return res
}
