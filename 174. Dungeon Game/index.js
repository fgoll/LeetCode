/**
 * 174. Dungeon Game
 * 
 * https://leetcode.com/problems/dungeon-game/
 */

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length
  let n = dungeon[0].length

  let hp = [...Array(m+1)].map(_ => [...Array(n+1)].map(_ => Number.MAX_VALUE))

  hp[m][n-1] = 1
  hp[m-1][n] = 1
  for (let i = m - 1; i >= 0; i --) {
    for (let j = n - 1; j >= 0; j --) {
      let need = Math.min(hp[i + 1][j], hp[i][j + 1]) - dungeon[i][j];
      hp[i][j] = need <= 0 ? 1 : need;
    }
  }
  return hp[0][0]
};