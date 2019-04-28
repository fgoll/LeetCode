/**
 * 347. Top K Frequent Elements
 * 
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Example 1:
 *  Input: nums = [1,1,1,2,2,3], k = 2
 *  Output: [1,2]
 *  
 * Example 2:
 *  Input: nums = [1], k = 1
 *  Output: [1]
 * 
 * Note:
 *  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 *  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = {}

  let max = 0

  for (let i = 0; i < nums.length; i ++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    }else {
      map[nums[i]] ++
    }
    max = Math.max(max, map[nums[i]])
  }

  let buckets = []
  for (let key in map) {
    let index = map[key]
    if (!buckets[index]) {
      buckets[index] = [key]
    }else {
      buckets[index].push(key)
    }
  }

  let res = []
  for (let i = max; i > 0; i --) {
    if (buckets[i]) {
      res = [...res, ...buckets[i]]
    }
    if (res.length === k) break
  }
  return res
};