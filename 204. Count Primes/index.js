/**
 * 204. Count Primes
 * 
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 *  Input: 10
 *  Output: 4
 *  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let notPrimie = [...Array(n)].map(_ => false)

  let count = 0

  for (let i = 2; i < n; i ++) {
    if (notPrimie[i] === false) {
      count ++
      for (let j = 2; i * j < n; j ++) {
        notPrimie[i*j] = true
      }
    }
  }

  return count
};