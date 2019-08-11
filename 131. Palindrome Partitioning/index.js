/**
 * 131. Palindrome Partitioning
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 *  
 * Example:
 *  Input: "aab"
 *  Output:
 *  [
 *    ["aa","b"],
 *    ["a","a","b"]
 *  ]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = []
  function helper(l, cur) {
    if (cur.length > 0 && l >= s.length) {
      res.push(cur)
    }

    for (let i = l; i < s.length; i ++) {
      if (isPalindrome(l, i)) {
        if (l === i) {
          helper(i + 1, [...cur, s[i]])
        }else {
          helper(i + 1, [...cur, ...s.substring(i, l)])
        }
      }
    }
  }

  function isPalindrome(l, r) {
    if (l === r) return true
    while (l < r) {
      if (s[l] !== s[r]) return false
      l ++
      r --
    }

    return true
  }

  helper(0, [])
  
  return res
};

