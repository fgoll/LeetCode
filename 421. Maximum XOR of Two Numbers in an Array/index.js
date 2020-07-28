/**
 * 421. Maximum XOR of Two Numbers in an Array
 * 
 * Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.
 * Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.
 * Could you do this in O(n) runtime?
 * 
 * Example:
 *  Input: [3, 10, 5, 25, 2, 8]
 *  Output: 28
 *  Explanation: The maximum result is 5 ^ 25 = 28.
 */

/**
 * 异或运算的一个性质：
 *  如果 a ^ b = c 成立，那么a ^ c = b 与 b ^ c = a 均成立。
 * 即 如果有三个数，满足其中两个数的异或值等于另一个值，那么这三个数的顺序可以任意调换。

 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let max = 0, mask = 0

  for (let i = 31; i >= 0; i --) {
    mask = mask | (1 << i)
    let set = new Set()
    for (let num of nums){
      set.add(num & mask)
    }
    let tmp = max | (1 << i)

    for (let prefix of set) {
      if (set.has(prefix & mask)) {
        max = tmp
        return
      }
    }
  }

  return max
};