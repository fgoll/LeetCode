/**
 * 799. Champagne Tower
 * 
 * https://leetcode.com/problems/champagne-tower/
 */

 /**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  let R = 102
  let glasses = [...Array(R)].map(_ => [...Array(R)].map(_ => 0))

  glasses[0][0] = poured

  for (let i = 0; i < query_row; i ++) {
    for (let j = 0; j <= i; j ++) {
      
      let flow = glasses[i][j] > 1 ? (glasses[i][j] - 1) / 2 : 0

      glasses[i+1][j] += flow
      glasses[i+1][j+1] += flow
    }
  }

  return Math.min(1, glasses[query_row][query_glass])
};