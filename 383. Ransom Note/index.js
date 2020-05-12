/**
 * 383. Ransom Note
 * 
 * Given an arbitrary ransom note string and another string containing 
 * letters from all the magazines, write a function that will return true if the 
 * ransom note can be constructed from the magazines ; otherwise, it will return false.
 * 
 * Each letter in the magazine string can only be used once in your ransom note.
 * 
 * Example 1:
 *  Input: ransomNote = "a", magazine = "b"
 *  Output: false
 * 
 * Example 2:
 *  Input: ransomNote = "aa", magazine = "ab"
 *  Output: false
 * 
 * Example 3: 
 *  Input: ransomNote = "aa", magazine = "aab"
 *  Output: true
 *  
 * Constraints:
 *  You may assume that both strings contain only lowercase letters.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map1 = {}
  let map2 = {}

  for (let i = 0; i < ransomNote.length; i ++) {
    let c = ransomNote[i]
    map1[c] = (map1[c] || 0)+1
  }

  for (let i = 0; i < magazine.length; i ++) {
    let c = magazine[i]
    map2[c] = (map2[c] || 0)+1
  }

  for (let key in map1) {
    if (!map2[key] || map2[key] < map1[key]) return false
  }

  return true
};