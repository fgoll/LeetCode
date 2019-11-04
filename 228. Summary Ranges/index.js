/**
 * 228. Summary Ranges
 * 
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 * 
 * Example 1:
 *  Input:  [0,1,2,4,5,7]
 *  Output: ["0->2","4->5","7"]
 *  Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
 * 
 * Example 2:
 *  Input:  [0,2,3,4,6,8,9]
 *  Output: ["0","2->4","6","8->9"]
 *  Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  
  let res = []
  for (let i = 0; i < nums.length; i ++) {
    let a = nums[i]
    while (i + 1 < nums.length && nums[i+1] - nums[i] === 1) {
      i ++
    }
    if (a !== nums[i]) {
      res.push(a + '->' + nums[i])
    }else {
      res.push(a + '')
    }
  }

  return res
};