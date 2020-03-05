/**
 * 345. Reverse Vowels of a String
 * 
 * Write a function that takes a string as input and reverse only the vowels of a string.
 * 
 * Example 1:
 *  Input: "hello"
 *  Output: "holle"
 * 
 * Example 2: 
 *  Input: "leetcode"
 *  Output: "leotcede"
 * 
 * Note:
 *  The vowels does not include the letter "y".
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowelsMap = {a:1,e:1,i:1,o:1,u:1}
  let l = s.split('')
  let left = 0, right = s.length - 1

  while (left < right) {
    while (left < right && !vowelsMap[l[left].toLowerCase()]) { left++ }
    while (left < right && !vowelsMap[l[right].toLowerCase()]) { right -- };

    let temp = l[left]
    l[left] = l[right]
    l[right] = temp
    left ++ 
    right --
  }

  return l.join('');
};