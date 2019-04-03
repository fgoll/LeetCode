/**
 * 75. Sort Colors
 * Given an array with n objects colored red, white or blue, 
 * sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * Note: You are not suppose to use the library's sort function for this problem.
 * 
 * Example:
 *  Input: [2,0,2,1,1,0]
 *  Output: [0,0,1,1,2,2]
 * 
 * Follow up:
 *    A rather straight forward solution is a two-pass algorithm using counting sort.
 *  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, 
 *  then 1's and followed by 2's.
 *    Could you come up with a one-pass algorithm using only constant space?
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    quickSort(nums, 0, nums.length)
};

function quickSort(nums, lo, hi) {
  if (hi - lo < 2) return
  let mi = partition(nums, lo, hi - 1);

  quickSort(nums, lo, mi)
  quickSort(nums, mi + 1, hi)
}

function partition(nums, lo, hi) {
  let pivot = nums[lo]

  while (lo < hi) {
    while (lo < hi && nums[hi] >= pivot) hi --
    nums[lo] = nums[hi]
    while (lo < hi && nums[lo] <= pivot) lo ++
    nums[hi] = nums[lo]
  }
  nums[lo] = pivot
  return lo
}

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors2 = function(nums) {
  let lo = 0, hi = nums.length - 1, zero = 0

  while (lo <= hi) {
    if (nums[lo] === 0) {
      nums[lo] = 1
      nums[zero] = 0
      lo ++;
      zero ++;
    }else if (nums[lo] === 2) {
      swap(lo, hi)
      hi --;
    }else {
      lo ++
    }
  }

  console.log(nums)
  function swap(i, j) {
    let temp = nums[i] 
    nums[i] = nums[j]
    nums[j] = temp
  }
};


console.log(sortColors2([2,0,2]))
// [2,1,0,2,1,1,0]
// [0,1,0,2,1,1,2]
// []