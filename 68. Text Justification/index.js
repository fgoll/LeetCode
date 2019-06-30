/**
 * 68. Text Justification
 * 
 * https://leetcode.com/problems/text-justification/
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

  let res = []

  let index = 0

  while (index < words.length) {
    let count = words[index].length
    let last = index + 1

    while (last < words.length) {
      const len = words[last].length + 1 + count
      if (len > maxWidth) break
      count = len
      last++
    }

    let line = ''

    let diff = last - index - 1

    if (last === words.length || diff === 0) {
      for (let i = index; i < last; i++) {
        line += words[i]
        if (i !== last - 1) {
          line += ' '
        }
      }
      for (let i = line.length; i < maxWidth; i++) {
        line += ' '
      }
    } else {
      let spaces = Math.floor((maxWidth - count) / diff)
      let r = (maxWidth - count) % diff

      for (let i = index; i < last; i++) {
        line += words[i]
        if (i < last - 1) {
          for (let j = 0; j <= (spaces + (i - index < r ? 1 : 0)); j++) {
            line += ' '
          }
        }
      }
    }
    index = last
    res.push(line)
  }

  return res
};