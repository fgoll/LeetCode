/**
 * 67. Add Binary
 * 
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 *  Input: a = "11", b = "1"
 *  Output: "100"
 * 
 * Example 2:
 *  Input: a = "1010", b = "1011"
 *  Output: "10101"
 */

 /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1
  let j = b.length - 1

  let plus = 0

  let d = []

  while (i >= 0 || j >= 0) {
    let a1 = i >= 0 ? a[i].charCodeAt(0) : '0'.charCodeAt(0)
    let b1 = j >= 0 ? b[j].charCodeAt(0) : '0'.charCodeAt(0)
    let c = a1 + b1 - 2 * '0'.charCodeAt(0) + plus

    if (c > 1) {
      plus = 1
      c -= 2
    }else {
      plus = 0
    }
    
    d.push(c)

    i --
    j --
  }
  if (plus) {
    d.push(plus)
  }
    
  let res = ''
  while (true) {
     let c = d.pop()
     if (c !== undefined) {
       res += c
     }else {
       break
     }
  }


  return res
};