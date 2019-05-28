/**
 * 28. Implement strStr()
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0
  if (needle.length > haystack.length) return -1
  let next = buildNext(needle)

  let i = j = 0
  while (i < haystack.length && j < needle.length) {
    if (j < 0 || haystack[i] === needle[j]) {
      i ++
      j ++
    }else {
      j = next[j]
    }
  }
    
  if (j < needle.length) {
      return -1
  }    

  return i - j
};

function buildNext(p) {
  let next = []

  let t = next[0] = -1
  let j = 0

  while (j < p.length - 1) {
    if (t < 0 || p[j] === p[t]) {
      t ++ 
      j ++
      next[j] = t
    }else {
      t = next[t]
    }
  }
  return next
}