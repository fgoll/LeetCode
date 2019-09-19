/**
 * 171. Excel Sheet Column Number
 * 
 * n a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

  Example 1:
    Input: "A"
    Output: 1
    
  Example 2:
    Input: "AB"
    Output: 28
      
  Example 3:
    Input: "ZY"
    Output: 701
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0
  for (let i = 0; i < s.length; result = result * 26 + (s[i].charCodeAt(0) - 'A'.charCodeAt(0)  + 1), i ++)
  return result
};