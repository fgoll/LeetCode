/**
 * 475. Heaters
 * 
 * https://leetcode.com/problems/heaters/
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b)
  
  let res = Number.MIN_VALUE

  for (let house of houses) {
    let index = binarySearch(heaters, house)

    let dist1 = index - 1 >= 0 ? house - heaters[index - 1] : Number.MAX_VALUE
    let dist2 = index < heaters.length ? heaters[index] - house : Number.MAX_VALUE

    res = Math.max(res, Math.min(dist1, dist2))
  }

  return res
};


function binarySearch(nums, target) {
 let lo = 0, hi = nums.length 

 while (lo < hi) {
   let mid = (lo + hi) >> 1

   if (target <= nums[mid]) {
     hi = mid
   }else {
     lo = mid + 1
   }
 }

 return lo
}