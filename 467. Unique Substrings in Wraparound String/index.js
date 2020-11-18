/**
 * 467. Unique Substrings in Wraparound String
 * 
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/
 */

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
  let count = [...Array(26)].map(_ => 0)

  let maxLength = 0
  for (let i = 0; i < p.length; i ++) {

    const curr = p.charCodeAt(i)
    const prev = p.charCodeAt(i-1)
    if (i > 0 && (curr - prev === 1 || prev - curr === 25)) {
      maxLength ++
    } else {
      maxLength = 1
    }
    let index = p.charCodeAt(i) - 'a'.charCodeAt(0)
    count[index] = Math.max(count[index], maxLength)
  }

  let res = 0
  for (let i = 0; i < count.length; i ++) {
    res += count[i]
  }

  return res
}; 