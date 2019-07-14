/**
 * 93. Restore IP Addresses
 * 
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.
 * 
 * Example:
 *  Input: "25525511135"
 *  Output: ["255.255.11.135", "255.255.111.35"]
 */

 /**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let res = []
  backtrack(res, s, index, ret, count)
  return res
};

function backtrack(res, s, index, ret, count) {
  if (count > 4) return
  if (count === 4 && index === s.length) {
    res.push(ret)
  } 

  for (let i = 1; i <= 3; i ++) {
    if (index + i > s.length) break
    let sub = s.substring(index, index + i)
    if ((sub[0] === '0' && sub.length > 1) || (i === 3 && parseInt(sub) > 255)) continue
    backtrack(res, s, index + i, ret + sub + (count === 3 ? '' : '.'), count + 1)
  }
}