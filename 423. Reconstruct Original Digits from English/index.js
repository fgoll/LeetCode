/**
 * 423. Reconstruct Original Digits from English
 * 
 * Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.
 * 
 * Note:
 *  Input contains only lowercase English letters.
 *  Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
 *  Input length is less than 50,000.
 * 
 * Example 1:
 *  Input: "owoztneoer"
 *  Output: "012"
 * 
 * Example 2:
 *  Input: "fviefuro"
 *  Output: "45"
 */

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let count = [...Array(26)].map(_ => 0)
  const code = (c) => c.charCodeAt(0) - 'a'.charCodeAt('0')
  for (let i = 0; i < s.length; i ++) {
    let c = s[i]
    count[code(c)]++
  }
  
  let out = []
  // letter "z" is present only in "zero"
  out[0] = count[code('z')];
  // letter "w" is present only in "two"
  out[2] = count[code('w')];
  // letter "u" is present only in "four"
  out[4] = count[code('u')];
  // letter "x" is present only in "six"
  out[6] = count[code('x')];
  // letter "g" is present only in "eight"
  out[8] = count[code('g')];
  // letter "h" is present only in "three" and "eight"
  out[3] = count[code('h')] - out[8];
  // letter "f" is present only in "five" and "four"
  out[5] = count[code('f')] - out[4];
  // letter "s" is present only in "seven" and "six"
  out[7] = count[code('s')] - out[6];
  // letter "i" is present in "nine", "five", "six", and "eight"
  out[9] = count[code('i')] - out[5] - out[6] - out[8];
  // letter "n" is present in "one", "nine", and "seven"
  out[1] = count[code('n')] - out[7] - 2 * out[9];

  let res = ''
  for (let i = 0; i < 10; i ++) {
    for (let j = 0; j < out[i]; j ++) {
      res += i
    }
  }

  return res
};