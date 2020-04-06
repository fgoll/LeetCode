/**
 * 311. Sparse Matrix Multiplication
 */

// 给你两个 稀疏矩阵 A 和 B，请你返回 AB 的结果。你可以默认 A 的列数等于 B 的行数。

// 请仔细阅读下面的示例。

//  

// 示例：

// 输入：

// A = [
//   [ 1, 0, 0],
//   [-1, 0, 3]
// ]

// B = [
//   [ 7, 0, 0 ],
//   [ 0, 0, 0 ],
//   [ 0, 0, 1 ]
// ]

// 输出：

//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
//                   | 0 0 1 |

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  let res = [...Array(A.length)].map(_ => [...Array(B[0].length)])

  for (let i = 0; i < A.length; i ++) {
    for (let j = 0; j < B[0].length; j ++) {
      res[i][j] = 0

      for (let t = 0; t < B.length; t ++) {
        res[i][j] += A[i][t] * B[t][j]
      }
    }
  }

  return res
};