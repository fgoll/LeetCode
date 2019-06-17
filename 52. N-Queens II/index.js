/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var res = []

  function backtrack(queens) {
    if (queens.length === n) {
      res.push(queens)
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
    
  return res.length
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
