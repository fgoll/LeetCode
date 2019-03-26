/**
 * 49. Group Anagrams
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let dict = {}

  for (let i = 0; i < strs.length; i ++) {
    let count = [...Array(26)].map(_ => 0)
    for (let j = 0; j < strs[i].length; j ++) {
      let index = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)
      count[index] = count[index] + 1
    }
    if (Array.isArray(dict[count])) {
      dict[count].push(strs[i])
    }else {
      dict[count] = [strs[i]]
    }
  }
  let res = []
  for (let key in dict) {
    res.push(dict[key])
  }
  return res

};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
