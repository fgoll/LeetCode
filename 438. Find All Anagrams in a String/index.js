/**
 * 438. Find All Anagrams in a String
 * 
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
 * The order of output does not matter.
 * 
 * Example 1:
 *  Input:
 *    s: "cbaebabacd" p: "abc"
 *  Output:
 *    [0, 6]
 *  Explanation:
 *    The substring with start index = 0 is "cba", which is an anagram of "abc".
 *    The substring with start index = 6 is "bac", which is an anagram of "abc".
 * 
 * Example 2:
 *  Input:
 *    s: "abab" p: "ab"
 *  Output:
 *    [0, 1, 2]
 *  Explanation:
 *    The substring with start index = 0 is "ab", which is an anagram of "ab".
 *    The substring with start index = 1 is "ba", which is an anagram of "ab".
 *    The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = {}, res = []
  if (p.length > s.length) return res
  for (let i = 0; i < p.length; i ++) {
    map[p[i]] = map[p[i]] > 0 ? ++map[p[i]] : 1
  }
  for (let i = 0; i < s.length; ) {
    let j = i
    let temp = Object.assign({}, map)
    let cur = 0
    
    while (temp[s[j]]) {
      temp[s[j]]--
      j ++
      cur ++
    }
    if (cur === p.length) {
      res.push(i)
    }
  }
  return res
};

/**
 * sliding window
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
 
  let map = {}, res = []
  for (let i = 0; i < p.length; i ++) {
    map[p[i]] = map[p[i]] > 0 ? ++map[p[i]] : 1
  }

  let left = 0, right = 0, count = p.length
  while (right < s.length) {
    if (--map[s[right++]] >= 0) count--

    if (count === 0) res.push(left)

    if (right - left === p.length && map[s[left++]]++ >= 0) count ++
  }

  return res
};

