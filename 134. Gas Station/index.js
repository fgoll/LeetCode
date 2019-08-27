/**
 * 134. Gas Station
 * 
 * https://leetcode.com/problems/gas-station/
 */


 /**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let n = gas.length

  let totalTank = 0, currTank = 0
  let start = 0

  for (let i = 0; i < n; i ++) {
    totalTank += (gas[i] - cost[i])
    currTank += (gas[i] - cost[i])
    if (currTank < 0) {
      start = i + 1
      currTank = 0
    }
  }

  if (totalTank >= 0) return start

  return -1
};