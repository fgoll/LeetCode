/**
 * 443. String Compression
 * 
 * https://leetcode.com/problems/string-compression/
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let anchor = 0, write = 0
  for (let read = 0; read < chars.length; read ++) {
    if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
      chars[write ++] = chars[anchor]
      if (read > anchor) {
        let ch = ('' + (read - anchor + 1))
        for (let i = 0; i < ch.length; i ++) {
          chars[write ++] = ch[i]
        }
      }
      anchor = read + 1
    }
  }
  return write
};