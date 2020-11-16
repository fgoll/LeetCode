/**
 * 464. Can I Win
 * 
 * https://leetcode.com/problems/can-i-win/
 */

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (maxChoosableInteger >= desiredTotal) return true;
  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false; //1,..maxChoosable数列总和都比目标和小

  let state = [...Array(maxChoosableInteger + 1)].map(_ => 0)

  return backtracing(desiredTotal, state, {})
};

function backtracing(desiredTotal, state, map) {
  let key = state.map((item, i) => {
      if (item) 
          return i
      return null
  }).filter(item => item).join(',')
  if (map[key] !== undefined) return map[key]

  for (let i = 1; i < state.length; i ++) {
    if (!state[i]) {
      state[i] = 1
      if (desiredTotal - i <= 0 || !backtracing(desiredTotal - i, state, map)) {

        map[key] = true
        state[i] = 0

        return true
      }
      state[i] = 0
    }
  }

  map[key] = false

  return false
}