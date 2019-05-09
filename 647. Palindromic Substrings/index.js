/**
 * 647. Palindromic Substrings
 * 
 * Given a string, your task is to count how many palindromic substrings in this string.
 * The substrings with different start indexes or end indexes are counted as different 
 * substrings even they consist of same characters.
 * 
 * Example 1:
 *  Input: "abc"
 *  Output: 3
 *  Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * Example 2:
 *  Input: "aaa"
 *  Output: 6
 *  Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const size = s.length

  let res = 0

  for (let i = 0; i < size; i++) {
    let l = i,
      r = i;
    while (l - 1 >= 0 && r + 1 < size) {
      if (s[l - 1] === s[r + 1]) {
        l -= 1
        r += 1
      } else {
        break
      }
    }
    res += (r - i + 1)

    l = i + 1
    r = i
    while (l - 1 >= 0 && r + 1 < size) {
      if (s[l - 1] === s[r + 1]) {
        l -= 1
        r += 1
      }else {
        break
      }
    }
    res += (r - i)
  }

  return res
};