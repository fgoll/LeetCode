/**
 * 433. Minimum Genetic Mutation
 * 
 * https://leetcode.com/problems/minimum-genetic-mutation/
 */

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let candidate = bank.reduce((prev, curr) => ({ ...prev, [curr]: 1 }), {})

  let visited = {}
  let q = []

  q.push([start, 0])

  while (q.length) {
    let [gene, step] = q[0]
    if (gene === end) return step

    q.shift()

    for (let i = 0; i < gene.length; i ++) {
      let temp = gene[i]
      for (let base of 'ATCG') {

        gene = gene.split('')
        gene[i] = base
          
        gene = gene.join('')
        if (!visited[gene] && candidate[gene]) {
          visited[gene] = true
          q.push([gene, step + 1])
        } 
      }
      gene = gene.split('')
      gene[i] = temp
      gene = gene.join('')
    }
  }
  return -1
};