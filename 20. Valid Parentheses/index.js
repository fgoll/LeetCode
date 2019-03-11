/**
 * 20. Valid Parentheses
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *  Open brackets must be closed by the same type of brackets.
 *  Open brackets must be closed in the correct order.
 *  
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 *  Input: "()"
 *  Output: true
 * 
 * Example 2:
 *  Input: "()[]{}"
 *  Output: true
 * 
 * Example 3:
 *  Input: "(]"
 *  Output: false
 *  
 * Example 4:
 *  Input: "([)]"
 *  Output: false
 * 
 * Example 5:
 *  Input: "{[]}" 
 *  Output: true
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let dict = {
      ')': '(',
      '}': '{',
      ']': '['
    }

    let stack = []

    let i = 0, l = s.length

    while (i < l) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i])
      }else {
        let top = stack[stack.length - 1]
        if (dict[s[i]] === top) {
          stack.pop()
        }else {
          return false
        }
      }
      i ++
    }

    return stack.length === 0
};

console.log(isValid(']'))