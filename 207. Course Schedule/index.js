/**
 * 207. Course Schedule
 * 
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, 
 * which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 * 
 * Example 1:
 *  Input: 2, [[1,0]] 
 *  Output: true
 *  Explanation: There are a total of 2 courses to take. 
 *               To take course 1 you should have finished course 0. So it is possible.
 * 
 * Example 2:
 *  Input: 2, [[1,0],[0,1]]
 *  Output: false
 *  Explanation: There are a total of 2 courses to take. 
 *               To take course 1 you should have finished course 0, and to take course 0 you should
 *               also have finished course 1. So it is impossible.
 * Note:
 *  1. The input prerequisites is a graph represented by a list of edges, not adjacency matrices. 
 *     Read more about how a graph is represented.
 *  2. You may assume that there are no duplicate edges in the input prerequisites.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = createGraph(numCourses)
  for (let p of prerequisites) {
    graph[p[0]].push(p[1])
  }
  let v = new Array(numCourses).map(_ => 0)

  for (let i = 0; i < numCourses; i ++) {
    if (dfs(i)) return false
  }

  function dfs(cur) {
    if (v[cur] === 1) return true
    if (v[cur] === 2) return false

    v[cur] = 1
      
    for (let t of graph[cur]) {
      if (dfs(t)) return true
    }

    v[cur] = 2

    return false
  }

  return true

};

function createGraph(num) {
  let graph = new Array(num)
  for (let i = 0; i < num; i ++) {
    graph[i] = []
  }

  return graph
}