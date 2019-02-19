/**
 * 3. Longest Substring Without Repeating Characters
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 *  Example 1:
 *    Input: "abcabcbb"
 *    Output: 3 
 *    Explanation: The answer is "abc", with the length of 3. 
 * 
 *  Example 2:
 *    Input: "bbbbb"
 *    Output: 1
 *    Explanation: The answer is "b", with the length of 1.
 * 
 *  Example 3:
 *    Input: "pwwkew"
 *    Output: 3
 *    Explanation: The answer is "wke", with the length of 3. 
 *                 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dict = {}
    let m = 0, 
        i = 0, j = 0, 
        l = s.length

    while(i < l && j < l) {
      if (!dict[s[j]]) {
        dict[s[j]] = 1
        j ++
        m = m > (j - i) ? m : (j - i)
      }else {
        dict[s[i++]] = null
      }
    }
    return m
};

console.log(lengthOfLongestSubstring(''))