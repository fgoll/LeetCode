/**
 
The Hamming distance between two integers is the number of positions 
 at which the corresponding bits are different.

 Given an integer array nums, return the sum of Hamming distances between 
 all the pairs of the integers in nums.

Example 1:

Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
Example 2:

Input: nums = [4,14,4]
Output: 4
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 109
The answer for the given input will fit in a 32-bit integer.
 */

/**
 * 
 * 对汉明距离有贡献的只有1 ^ 0，某位上有c个1，每个1对应n - c个0，总贡献就是c * (n - c)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let ans = 0, n = nums.length

    for (let i = 0; i < 30; i ++) {
        let c = 0
        for (let num of nums) {
            c += (num >> i) & 1
        }
        ans += c * (n - c)
    }

    return ans
};