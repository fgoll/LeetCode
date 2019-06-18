/**
 * 58. Length of Last Word
 * 
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
 * return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space characters only.
 * 
 * Example:
 *  Input: "Hello World"
 *  Output: 5
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

  if (s.length === 0) return 0

  let i = 0, last, begin = false;
  for (i = s.length - 1; i >= 0; i --) {
    if (begin) {
      if (s[i] === ' ') break
    }else if (s[i] !== ' ') {
      last = i
      begin = true
    }
    
  }  
    
  if (!begin) return  0

  return last - i
};