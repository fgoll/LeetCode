/**
 * 399. Evaluate Division
 * 
 * Equations are given in the format A / B = k, where A and B are variables represented as strings, 
 * and k is a real number (floating point number). Given some queries, return the answers. 
 * If the answer does not exist, return -1.0.
 * 
 * Example:
 *  Given a / b = 2.0, b / c = 3.0.
 *  queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
 *  return [6.0, 0.5, -1.0, 1.0, -1.0 ].
 * 
 * The input is: vector<pair<string, string>> equations, vector<double>& values, 
 * vector<pair<string, string>> queries , where equations.size() == values.size(), 
 * and the values are positive. This represents the equations. Return vector<double>.
 * 
 * According to the example above:
 *  equations = [ ["a", "b"], ["b", "c"] ],
 *  values = [2.0, 3.0],
 *  queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 *  
 * The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
 */

 /**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let g = {}

    let res = []

    for (let i = 0; i < equations.length; i ++) {
      let A = equations[i][0]
      let B = equations[i][1]
      if (!g[A]) {
        g[A] = {}
      }
      if (!g[B]) {
        g[B] = {}
      }

      g[A][B] = values[i]
      g[B][A] = 1 / values[i]
    }

    for (let pair of queries) {
      let [A, B] = pair

      let value = dfs(g, A, B, 1, new Set())

      res.push(value ? value : -1)

      if (value) {
        g[A][B] = value
        g[B][A] = 1 / value
      }
    }

    return res
};

function dfs(g, A, B, reduce, visited) {
  if (!g[A]) return null

  visited.add(A)

  for (let node in g[A]) {
    const produce = reduce * g[A][node]

    if (node === B) return produce

    if (!visited.has(node)) {
      const value = dfs(g, node, B, produce, visited)

      if (value) return value
    }
  }

  return null
}