/**
 * 133. Clone Graph
 * 
 * https://leetcode.com/problems/clone-graph/
 */

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  return clone(node, {})
};

function clone(node, map) {
  if (!node) return null
  if (map[node.val]) {
    return map[node.val]
  }

  let neighbors = []

  let c = new Node(node.val, neighbors)

  map[node.val] = c

  for (let neighbor of node.neighbors) {
    neighbors.push(clone(neighbor, map))
  }

  return c
}