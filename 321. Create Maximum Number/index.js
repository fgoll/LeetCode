/**
 * 321. Create Maximum Number
 * 
 * Given two arrays of length m and n with digits 0-9 representing two numbers. 
 * Create the maximum number of length k <= m + n from digits of the two. 
 * The relative order of the digits from the same array must be preserved. 
 * Return an array of the k digits.
 * 
 * Note: You should try to optimize your time and space complexity.
 * 
 * Example 1:
 *  Input:
 *  nums1 = [3, 4, 6, 5]
 *  nums2 = [9, 1, 2, 5, 8, 3]
 *  k = 5
 *  Output:
 *  [9, 8, 6, 5, 3]
 * 
 * Example 2:
 *  Input:
 *  nums1 = [6, 7]
 *  nums2 = [6, 0, 4]
 *  k = 5
 *  Output:
 *  [6, 7, 6, 0, 4]
 * 
 * Example 3:
 *  Input:
 *  nums1 = [3, 9]
 *  nums2 = [8, 9]
 *  k = 3
 *  Output:
 *  [9, 8, 9]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let res = []
  const n1 = nums1.length, n2 = nums2.length;
  for (let k1 = 0; k1 <= k; k1 ++) {
    const k2 = k - k1
    if (k1 > n1 || k2 > n2) continue
    res = max(res, mergeNum(maxNum(nums1, k1), maxNum(nums2, k2)))    
  }

  return res
};

function mergeNum(nums1, nums2) {
  let nums = []

  let i = 0, j = 0

  let numstr1 = nums1.join('')
  let numstr2 = nums2.join('')

  while (i < nums1.length && j < nums2.length) {
    let str1 = numstr1.substring(i)
    let str2 = numstr2.substring(j)

    if (str1 > str2) {
      nums.push(nums1[i])
      i ++
    }else {
      nums.push(nums2[j])
      j ++
    }
  }

  while (i < nums1.length) {
    nums.push(nums1[i])
    i ++
  }
  while (j < nums2.length) {
    nums.push(nums2[j])
    j ++
  }
  return nums
}

function max(nums1, nums2) {
  return nums1 > nums2 ? nums1 : nums2
}

function maxNum(nums, k) {
  if (k === 0) return []
  let res = []
  let popNum = nums.length - k
  for (let num of nums) {
    while (res.length && num > res[res.length - 1] && popNum-- > 0) {
      res.pop()
    }
    res.push(num)
  }
  res.length = k

  return res
}