/**
 * 394. Decode String
 * 
 * Given an encoded string, return it's decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string 
 * inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * 
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any digits and that digits 
 * are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
 * 
 * Examples:
 *  s = "3[a]2[bc]", return "aaabcbc".
 *  s = "3[a2[c]]", return "accaccacc".
 *  s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */

 /**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let index = 0
  function dfs() {
    let res = ''
    
    while (index < s.length) {
      if (s[index] === ']') {
        return res
      }else
      if (s[index] >= '0' && s[index] <= '9') {
        let k = 0
        while (s[index] >= '0' && s[index] <= '9') {
          k = k * 10 + (s[index++] - '0')
        }

        index ++ // jump [
        let temp = dfs(index)
        index ++ // jump ]
        while (k > 0) {
          res += temp
          k --
        }
      }else {
        res += s[index++]
      }
    }
    return res

  }

  return dfs()

};