/**
 * 125. Valid Palindrome
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * Example 1:
 *  Input: "A man, a plan, a canal: Panama"
 *  Output: true
 * 
 * Example 2:
 *  Input: "race a car"
 *  Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
  let start = 0
  let end = s.length - 1

  while (start < end) {
    while (start < end && !isValid(s[start])) {
      start ++
    }
    while (start < end && !isValid(s[end])) {
      end --
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false

    start ++
    end --
  }

  return true
};

function isValid(c){

  return  c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 ||
          c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122 ||
          c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;
}