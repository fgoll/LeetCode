/**
 * 30. Substring with Concatenation of All Words
 * 
 * You are given a string, s, and a list of words, words, that are all of the same length.
 * Find all starting indices of substring(s) in s that is a concatenation of each word in 
 * words exactly once and without any intervening characters.
 * 
 * Example 1:
 *  Input:
 *    s = "barfoothefoobarman",
 *    words = ["foo","bar"]
 *  Output: [0,9]
 *    Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
 *    The output order does not matter, returning [9,0] is fine too.
 * 
 * Example 2:
 *  Input:
 *    s = "wordgoodgoodgoodbestword",
 *    words = ["word","good","best","word"]
 *  Output: []
 */

 /**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || words.length === 0) return []
  let n = words.length
  let m = words[0].length

  let res = []

  let map = {}
  words.forEach(function(word) {
    map[word] = map[word] ? map[word]+1 : 1
  })

  for (let i = 0; i <= s.length - n * m; i ++) {
    let temp = Object.assign({}, map)

    let k = n
    let j = i

    while (k > 0) {
      let word = s.substr(j, m);

      if (!temp[word] || temp[word] < 1) {
        break
      }else {
        temp[word]--
      }
      k --
      j += m
    }

    if (k === 0) {
      res.push(i)
    }
  }

  return res
};