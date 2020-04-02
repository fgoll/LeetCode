/**
 * 306. Additive Number
 * 
 * Additive number is a string whose digits can form additive sequence.
 * 
 * A valid additive sequence should contain at least three numbers. 
 * Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
 * 
 * Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.
 * 
 * Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
 * 
 * Example 1:
 *  Input: "112358"
 *  Output: true
 *  Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
 *               1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * Example 2:
 *  Input: "199100199"
 *  Output: true
 *  Explanation: The additive sequence is: 1, 99, 100, 199. 
 *               1 + 99 = 100, 99 + 100 = 199
 * 
 * Constraints:
 *  num consists only of digits '0'-'9'.
 *  1 <= num.length <= 35
 * 
 * Follow up:
 *  How would you handle overflow for very large input integers?
 */

/**
 * 1.为了处理大正数相加应该使用两字符串相加的程序，并且与和的字符串比较，避免转换为int消耗时间与溢出。
 * 2.dfs时的i,j,k分别代表第一个、第二个和第三个数字的起始下标，这样好处在于计算各个字符串时都很方便。
 * 3.第一个数字的起始下标一定是0，但是第二和第三个数字的起始下标不固定，需要通过两层循环枚举，在拿到起始数字之后，就可以dfs一直到最后验证是否整个字符串符合要求。
 * 4.这道题dfs的递归结束条件和普通稍有不同，要仔细思考。这里递归成功的标志是一直到字符串最后一个字符都满足要求，即是累加序列，那么我们需要看是否能够递归到最后一个位置正好结束。
 * 
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  let i = 0
  for (let j = i + 1; j < num.length; j ++) {
    for (let k = j + 1; k < num.length; k ++) {

      if (dfs(num, i, j, k)) return true
    }
  }

  return false
};

function dfs(s, i, j, k) {
  if ((s[i] === '0' && j - i > 1) || (s[j] === '0' && k - j > 1)) return false

  let a = s.substr(i, j-i)
  let b = s.substr(j, k-j)
  let sum = add(a, b)
  let n = sum.length

  if (k + n > s.length || sum !== s.substr(k, n)) return false
  if (k + n === s.length) return true
  return dfs(s, j, k, k + n)
}

function add(a, b) {
  let n1 = a.length - 1
  let n2 = b.length - 1

  let carry = 0
  let ans = []

  while (n1 >= 0 || n2 >= 0 || carry > 0) {
    let t1 = n1 >= 0 ? +a[n1--] : 0
    let t2 = n2 >= 0 ? +b[n2--] : 0
    ans.push((t1+t2+carry) % 10)
    carry = (t1+t2+carry) >= 10 ? 1 : 0;
  }

  return ans.reverse().join('')
}