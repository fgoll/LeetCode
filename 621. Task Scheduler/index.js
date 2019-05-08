/**
 * 621. Task Scheduler
 * 
 * Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different 
 * letters represent different tasks. Tasks could be done without original order. Each task could be done in 
 * one interval. For each interval, CPU could finish one task or just be idle.
 * 
 * However, there is a non-negative cooling interval n that means between two same tasks, 
 * there must be at least n intervals that CPU are doing different tasks or just be idle.
 * 
 * You need to return the least number of intervals the CPU will take to finish all the given tasks.
 * 
 * Example:
 *  Input: tasks = ["A","A","A","B","B","B"], n = 2
 *  Output: 8
 *  Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 *  
 * Note:
 *  The number of tasks is in the range [1, 10000].
 *  The integer n is in the range [0, 100].
 */

 /**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let map = [...Array(26)].map(() => 0)
  let maxFreq = 0
  for (let c of tasks) {
    const index = c.charCodeAt(0) - 'A'.charCodeAt(0)
    map[index] ++
    maxFreq = Math.max(map[index], maxFreq)
  }

  let ans = (maxFreq - 1) * (n + 1)

  for (let freq of map) {
    if (freq === maxFreq) ans ++
  }

  return Math.max(ans, tasks.length)
  console.log(map)
};