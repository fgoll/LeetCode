/**
 * 318. Maximum Product of Word Lengths
 * 
 * Given a string array words, find the maximum value of length(word[i]) * length(word[j]) 
 * where the two words do not share common letters. You may assume that each word will 
 * contain only lower case letters. If no such two words exist, return 0.
 * 
 * Example 1:
 *  Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
 *  Output: 16 
 *  Explanation: The two words can be "abcw", "xtfn".
 * 
 * Example 2:
 *  Input: ["a","ab","abc","d","cd","bcd","abcd"]
 *  Output: 4 
 *  Explanation: The two words can be "ab", "cd".
 * 
 * Example 3:
 *  Input: ["a","aa","aaa","aaaa"]
 *  Output: 0 
 *  Explanation: No such pair of words.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let max = 0
    
    words.sort((a, b) => b.length - a.length)

    let masks = [...Array(words.length)].map(_ => 0)

    for (let i = 0; i < masks.length; i ++) {
        for (let c of words[i].split('')) {
            masks[i] |= (1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)))
        }
    }

    for (let i = 0; i < masks.length; i ++) {
        if (words[i].length * words[i].length <= max) break
        for (let j = i + 1; j < masks.length; j ++) {
            
            if ((masks[i] & masks[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length)
                break
            }
        }
    }

    return max
};