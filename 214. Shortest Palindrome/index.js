/**
 * 214. Shortest Palindrome
 * 
 * Given a string s, you are allowed to convert it to a palindrome by adding characters 
 * in front of it. Find and return the shortest palindrome you can find by performing this transformation.
 * 
 * Example 1:
 *  Input: "aacecaaa"
 *  Output: "aaacecaaa"
 * 
 * Example 2:
 *  Input: "abcd"
 *  Output: "dcbabcd"
 */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  let p = s + '#' + s.split('').reverse().join('')
  let max = buildNext(p)

  return s.substring(max).split('').reverse().join('') + s
};

function buildNext(s) {
  let next = []

  let t = next[0] = -1

  let j = 0

  while (j < s.length) {
    if (t < 0 || s[j] === s[t]) {
      j ++
      t ++
      next[j] = t
    }else {
      t = next[t]
    }
  }
  return next[s.length]
}
