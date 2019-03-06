/**
 * 17. Letter Combinations of a Phone Number
 * 
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  let dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let result = []
  function combination(str, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(str)
    }else {
      let chars = dict[nextDigits[0]]

      nextDigits = nextDigits.substring(1)
      for (let i = 0; i < chars.length; i ++) {
        combination(str + chars[i], nextDigits)
      }
    }
  }

  combination('', digits)

  return result
};

console.log(letterCombinations(''))