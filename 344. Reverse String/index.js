/**
 * 344. Reverse String
 * 
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * You may assume all the characters consist of printable ascii characters.
 * 
 * Example 1:
 *  Input: ["h","e","l","l","o"]
 *  Output: ["o","l","l","e","h"]
 * 
 * Example 2:
 *  Input: ["H","a","n","n","a","h"]
 *  Output: ["h","a","n","n","a","H"]
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let l = s.length
  let mid = l >> 1
  for (let i = 0; i < mid; i ++) {
    let tmp = s[i]
    s[i] = s[l-i-1]
    s[l-i-1] = tmp
  }  
};


var reverseString = function(s) {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    let tmp = s[l]
    s[l++] = s[r]
    s[r--] = tmp
  }
};