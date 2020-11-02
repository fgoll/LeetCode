/**
 * 451. Sort Characters By Frequency
 * 
 * Given a string, sort it in decreasing order based on the frequency of characters.
 * 
 * Example 1:
 *  Input:
 *    "tree"
 *  Output:
 *    "eert"
 *  Explanation:
 *    'e' appears twice while 'r' and 't' both appear once.
 *    So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 * 
 * Example 2:
 *  Input:
 *    "cccaaa"
 *  Output:
 *    "cccaaa"
 *  Explanation:
 *    Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 *    Note that "cacaca" is incorrect, as the same characters must be together.
 * 
 * Example 3:
 *  Input:
 *    "Aabb"
 *  Output:
 *    "bbAa"
 *  Explanation:
 *    "bbaA" is also a valid answer, but "Aabb" is incorrect.
 *    Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let map = {}
  let max = 0
  for (let i = 0; i < s.length; i ++) {
    map[s[i]] = (map[s[i]] || 0) + 1
    max = Math.max(max, map[s[i]])
  }

  let bucket = [...Array(max+1)].map(() => [])

  for (let key in map) {
    bucket[map[key]].push(key)
  }
    
  let res = ''
  for (let i = bucket.length-1; i >=0 ; i --) {
    let arr = bucket[i]
    for (let j = 0; j < arr.length; j ++) {
      let l = i
      while (l --) {
        res += arr[j]
      }
    }
  }

  return res
};