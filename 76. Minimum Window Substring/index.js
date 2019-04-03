/**
 * 76. Minimum Window Substring
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 * 
 * Example:
 *    Input: S = "ADOBECODEBANC", T = "ABC"
 *    Output: "BANC"
 * 
 * Note:
 *    If there is no such window in S that covers all characters in T, return the empty string "".
 *    If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let dict = {}

    for (let i = 0; i < t.length; i ++) {
      let count = dict[t[i]] ? dict[t[i]] : 0
      dict[t[i]] = count + 1
    }

    let from = lo = hi = 0

    let total = t.length;

    let min = s.length + 1

    while (hi < s.length) {
      let c = s[hi]

      if (dict[c]-- > 0) total --;

      while (total === 0) {
        if (hi - lo + 1 < min) {
          min = hi - lo + 1
          from = lo
        }

        if (++dict[s[lo++]] > 0) total ++
      }

      hi ++
    }

    if (min === s.length + 1) return ''

    return s.substr(from, min)
};

console.log(minWindow("a", 'aa'))