/**
 * 71. Simplify Path
 * 
 * https://leetcode.com/problems/simplify-path/
 */

 /**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  
  let i = -1
  let stack = []
  path = path.split('/')

  while (i < path.length - 1) {
    i ++
    let dir = path[i]

    if (dir === '' || dir === '.') continue
    if (dir === '..') {
      if (stack.length !== 0) stack.pop()
    } else {
      stack.push(dir)
    }
  }

  if (stack.length === 0) return '/'
  
  let res = ""
  for (i = 0; i < stack.length; i ++) {
    res += '/' + stack[i]
  }

  return res
};