/**
 * 65. Valid Number
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let i = 0, l = s.length 
  
  while (i < l && s[i] === ' ') {
    i ++  
  }

  if (i < l && (s[i] === '+' || s[i] === '-')) {
    i ++
  }

  let isDigits = false
  while (i < l && isDigit(s[i])) {
    i ++
    isDigits = true
  }

  if (i < l && s[i] === '.') {
    i ++
    while (i < l && isDigit(s[i])) {
      i ++
      isDigits = true
    }
  }

  if (i < l && s[i] === 'e' && isDigits) {
    i ++
    isDigits = false

    if (i < l && (s[i] === '+' || s[i] === '-')) i ++
    while (i < l && isDigit(s[i])) {
      i ++
      isDigits = true
    }
  }

  while (i < l && s[i] === ' ') i ++

  return isDigits && i === l 
};

function isDigit(c) {
  return c >= '0' && c <= '9'
}