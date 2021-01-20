// 476. Number Complement

// https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let mask = ~0
    while (mask & num) mask <<= 1

    return ~mask & ~num
};