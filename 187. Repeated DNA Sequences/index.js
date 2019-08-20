/**
 * 187. Repeated DNA Sequences
 * 
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, 
 * for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
 * 
 * Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
 * 
 * Example:
 *  Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 *  Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let res = []

  let code = 'A'.charCodeAt(0)
  let map = []
  map[0] = 0
  map['C'.charCodeAt(0) - code] = 1
  map['G'.charCodeAt(0) - code] = 2
  map['T'.charCodeAt(0) - code] = 3

  let words = {}
  let doubleWords = {}

  for (let i = 0; i < s.length - 9; i++) {
    let v = 0

    for (let j = i; j < i + 10; j++) {
      v <<= 2
      v |= map[s[j].charCodeAt(0) - code]
    }

    if (words[v]) {
      if (!doubleWords[v]) {
        res.push(s.substring(i, i + 10))
      }
      doubleWords[v] = 1
    }
    words[v] = 1
  }

  return res
};