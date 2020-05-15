/**
 * 386. Lexicographical Numbers
 * 
 * Given an integer n, return 1 - n in lexicographical order.
 * 
 * For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
 * 
 * Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let res = []
 
   for (let i = 1; i < 10; i ++) {
     dfs(i, n, res)
   }
   return res
 };
 
 function dfs(curr, n, res) {
 
   if (curr > n) {
     return
   } 
   res.push(curr)
   for (let i = 0; i < 10; i ++) {
     if(10*curr+i>n) return
     dfs(curr * 10 + i, n, res)
   }
 }