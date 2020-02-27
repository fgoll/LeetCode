/**
 * 341. Flatten Nested List Iterator
 * 
 * Given a nested list of integers, implement an iterator to flatten it.
 * 
 * Each element is either an integer, or a list -- whose elements may also be integers or other lists.
 * 
 * Example 1:
 *  Input: [[1,1],2,[1,1]]
 *  Output: [1,1,2,1,1]
 *  Explanation: By calling next repeatedly until hasNext returns false, 
 *               the order of elements returned by next should be: [1,1,2,1,1].
 * 
 * Example 2:
 *  Input: [1,[4,[6]]]
 *  Output: [1,4,6]
 *  Explanation: By calling next repeatedly until hasNext returns false, 
 *               the order of elements returned by next should be: [1,4,6].
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  let stack = []
  for (let i = nestedList.length - 1; i >= 0; i --) {
    stack.push(nestedList[i])
  }
  this.stack = stack
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  while (this.stack.length) {
    let curr = this.stack[this.stack.length - 1]
    if (curr.isInteger()) {
      return true;
    }
    this.stack.pop();

    for (let i = curr.getList().length - 1; i >= 0; i --) {
      this.stack.push(curr.getList()[i])
    }
  }

  return false
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.stack.pop().getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/