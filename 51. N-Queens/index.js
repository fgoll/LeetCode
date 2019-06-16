/**
 * 51. N-Queens
 * 
 * https://leetcode.com/problems/n-queens/
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var temp = []

  function backtrack(queens) {
    if (queens.length === n) {
      temp.push(queens)
      return
    }

    for (let i = 0; i < n; i ++) {
      if (!check(queens.length, i, queens)) {
        continue
      }
        
      backtrack([...queens, [queens.length, i]])
    }
  }

  
  for (let i = 0; i < n; i ++) {
    backtrack([[0, i]])
  }
    
  for (let t of temp) {
    let queen = []
     for (let i = t.length - 1; i >= 0; i--) {
       let s = ''
       for (let j = 0; j < n; j ++) {
         if (j !== t[i][1]) {
           s += '.'
         }else {
           s += 'Q'
         }
       }
       queen.push(s)
     }
     res.push(queen)
  }
  

  return res
};
function check(x, y, queens) {
  let res = true
  if (queens.length === 0) return res
  for (let q of queens) {
    if (x === q[0] 
      || y === q[1]
      || x + y === q[0] + q[1]
      || x - y === q[0] - q[1])  {
        res = false
      }
  }
  return res
}
