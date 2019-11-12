/**
 * 241. Different Ways to Add Parentheses
 * 
 * Given a string of numbers and operators, return all possible results 
 * from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.
 * 
 * Example 1:
 *  Input: "2-1-1"
 *  Output: [0, 2]
 *  Explanation: 
 *  ((2-1)-1) = 0 
 *  (2-(1-1)) = 2
 * 
 * Example 2:
 *  Input: "2*3-4*5"
 *  Output: [-34, -14, -10, -10, 10]
 *  Explanation: 
 *  (2*(3-(4*5))) = -34 
 *  ((2*3)-(4*5)) = -14 
 *  ((2*(3-4))*5) = -10 
 *  (2*((3-4)*5)) = -10 
 *  (((2*3)-4)*5) = 10
 */

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  let res = []
  for (let i = 0; i < input.length; i ++) {
    let sign = input[i]

    if (sign === '+' || sign === '-' || sign === '*') {
      let res1 = diffWaysToCompute(input.substring(0, i))
      let res2 = diffWaysToCompute(input.substring(i + 1))

      for (let c1 of res1) {
        for (let c2 of res2) {
          let c = 0
          if (sign === '+') {
            c = c1 + c2
          } else if (sign === '-') {
            c = c1 - c2
          } else {
            c = c1 * c2
          }
          res.push(c)
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(+input)
  }
  return res
};