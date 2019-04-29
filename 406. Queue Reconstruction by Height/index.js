/**
 * 
 * Suppose you have a random list of people standing in a queue. 
 * Each person is described by a pair of integers (h, k), where h is 
 * the height of the person and k is the number of people in front of 
 * this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.
 * 
 * Note:
 *  The number of people is less than 1,100.
 * 
 * Example
 *  Input:
 *  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 *  Output:
 *  [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 */

 /**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort(cmp)
  let cnt = 0
  let res = []
  for (let p of people) {
    for (let j = cnt; j >= p[1] + 1; j --) {
      res[j] = res[j - 1]
    }
    res[p[1]] = p
    cnt ++
  }
  return res
};

function cmp(a, b) {
   if(a[0] != b[0]) {
        return b[0] - a[0];
     } else {
        return a[1] - b[1];
     }
}