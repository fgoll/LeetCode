/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
  let i = 1, j = 1
  let len = 1
  while (j < nums.length ) {

    if (nums[j] === nums[j-1]) {
      if (len < 2) {
        nums[i++] = nums[j]
        len ++
      }
    }else {
      len = 1
      nums[i++]=nums[j]
    }

    j++
  }

  // nums.length = i
  return i
};