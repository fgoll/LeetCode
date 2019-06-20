/**
 * 60. Permutation Sequence
 * 
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 *  "123"
 *  "132"
 *  "213"
 *  "231"
 *  "312"
 *  "321"
 * Given n and k, return the kth permutation sequence.
 * 
 * Note:
 *  Given n will be between 1 and 9 inclusive.
 *  Given k will be between 1 and n! inclusive.
 * 
 * Example 1:
 *  Input: n = 3, k = 3
 *  Output: "213"
 * 
 * Example 2:
 *  Input: n = 4, k = 9 
 *  Output: "2314"
 */

 /**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
  let index = 0
  
  let res = ''
  let end = false

  function backtrack(str, curr) {
    // if (curr === n + 1) return
    if (end) return
    // console.log(str, curr, index)
    if (str.length === n) {
      index ++
      if (index === k) {
        res = str
        end = true
      }
      return
    }

    for (let i = 1; i <= n; i ++) {
      if (str.indexOf(i + '') > -1) continue
      backtrack(str + i, i)
    }

  }

  backtrack('', 0)
  return res
};


 /**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation2 = function(n, k) {
  
  let res = ''

  let numbers = []
  // numbers = {1, 2, 3, 4}

  let factorial = [1]
  // factorial[] = {1, 1, 2, 6, 24, ... n!}
  let sum = 1
  for (let i = 1; i < n; i ++) {
    sum *= i
    factorial[i] = sum  
  }

  for (let i = 1; i <= n; i ++) {
    numbers.push(i)
  }

  k --

  for (let i = 1; i <= n; i ++) {
    let index = k / factorial[n-i]
    res += numbers[index]
    numbers.splice(index, 1)
    k -= index * factorial[n-i]
  }

  return res
};