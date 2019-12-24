/**
 * 316. Remove Duplicate Letters
 * 
 * Given a string which contains only lowercase letters, remove duplicate letters so that 
 * every letter appears once and only once. You must make sure your result is the smallest 
 * in lexicographical order among all possible results.
 * 
 * Example 1:
 *  Input: "bcabc"
 *  Output: "abc"
 * 
 * Example 2:
 *  Input: "cbacdcbc"
 *  Output: "acdb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let cnt = [...Array(26)].map(_ => 0)
    let pos = 0
    let acode = 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i ++) {
        cnt[s[i].charCodeAt(0) - acode] ++
    }  
    for (let i = 0; i < s.length; i ++) {
        if (s[i] < s[pos]) pos = i
        if (--cnt[s[i].charCodeAt(0) - acode] === 0) break
    }

    return s.length ? s[pos] + removeDuplicateLetters(s.substring(pos+1).replace(new RegExp(s[pos], 'g'), '')) : ''
};