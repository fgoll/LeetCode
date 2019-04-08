/**
 * 128. Longest Consecutive Sequence
 * 
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * 
 * Example:
 *  Input: [100, 4, 200, 1, 3, 2]
 *  Output: 4
 *  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)

    let longest = 0

    for (let num of set) {
      
      if (!set.has(num - 1)) {
        let currentNum = num
        let currentLen = 1
        while (set.has(currentNum + 1)) {
          currentNum ++
          currentLen ++
        }

        longest = Math.max(longest, currentLen)
      }
    }
    
    return longest
};

longestConsecutive([2,4,2,1,5,6])