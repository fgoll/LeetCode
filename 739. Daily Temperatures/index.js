/**
 * 739. Daily Temperatures
 * 
 * Given a list of daily temperatures T, return a list such that, for each day in the input, 
 * tells you how many days you would have to wait until a warmer temperature. 
 * If there is no future day for which this is possible, put 0 instead.
 * 
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], 
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * 
 * Note: The length of temperatures will be in the range [1, 30000]. 
 * Each temperature will be an integer in the range [30, 100].
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let current 
  
  let res = []
  for (let i = 0; i < T.length; i ++) {
    current = T[i]
    let j = i + 1
    while (j < T.length) {
      if (T[j] > current) {
        res.push(j - i)
        break
      }else {
        j ++
      }
    }
    if (j === T.length) {
      res.push(0)
    }
  }

  return res
};
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = [],
    res = []

  for (let i = T.length - 1; i >= 0; i--) {

    while (stack.length !== 0 && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i

    stack.push(i)
  }

  return res
};

var dailyTemperatures = function (T) {

  
  let res = [...Array(T.length)].map(_ => 0), stack = []

  for (let i = 0; i < T.length; i ++) {

    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }

    stack.push(i)
  }
  return res
};