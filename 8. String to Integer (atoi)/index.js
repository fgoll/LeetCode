/**
 * 8. String to Integer (atoi)
 * 
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

 /**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()

  const first = str[0]
  
  if (first === '-') {
    return -handler(str, 1, -1)
  }else if (first === '+') {
    return handler(str, 1, 1)
  }
  return handler(str, 0, 1)

  function handler(str, start, sign) {
    let res = 0

    for (let i = start; i < str.length; i ++) {
        
      if (!isNaN(+str[i]) && str[i] !== ' ') {

        res = res * 10 + (str.charCodeAt(i) - '0'.charCodeAt(0))
        if (res > 2147483647) {
          if (sign > 0) return 2147483647
          else return 2147483648
        }
      }else {
        return res
      }
    }
    return res
  }
};