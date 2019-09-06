/**
 * 135. Candy
 * 
 * There are N children standing in a line. Each child is assigned a rating value.
 * 
 * You are giving candies to these children subjected to the following requirements:
 *  Each child must have at least one candy.
 *  Children with a higher rating get more candies than their neighbors.
 * 
 * What is the minimum candies you must give?
 * 
 * Example 1:
 *  Input: [1,0,2]
 *  Output: 5
 *  Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 * 
 * Example 2:
 *  Input: [1,2,2]
 *  Output: 4
 *  Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 *               The third child gets 1 candy because it satisfies the above two conditions.
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if (ratings.length <= 1) {
    return ratings.length
  }

  let candies = 0
  let up = 0
  let down = 0
  let old_slope = 0

  for (let i = 1; i < ratings.length; i ++) {
    let new_slope = (ratings[i] > ratings[i-1] ? 1 : (ratings[i] < ratings[i-1] ? -1 : 0))
    if ((old_slope > 0 && new_slope === 0) || (old_slope < 0 && new_slope >= 0)) {
      candies += count(up) + count(down) + Math.max(up, down)
      up = 0
      down = 0
    }

    if (new_slope > 0) {
      up ++
    } else if (new_slope < 0) {
      down ++
    } else {
      candies ++ 
    }

    old_slope = new_slope
  }

  candies += count(up) + count(down) + Math.max(up, down) + 1

  return candies
};

function count(n) {
  return (n * (n + 1)) / 2
}

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let candies = [...Array(ratings.length)].map(_ => 1)

  for (let i = 1; i < ratings.length; i ++) {
    if (ratings[i] > ratings[i-1]) {
      candies[i] = candies[i-1] + 1
    }
  }

  let sum = candies[candies.length - 1]

  for (let i = candies.length - 2; i >= 0; i --) {
    if (ratings[i] > ratings[i+1]) {
      candies[i] = Math.max(candies[i+1] + 1, candies[i])
    }
    sum += candies[i]
  }

  return sum
}