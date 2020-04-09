/**
 * 339. Nested List Weight Sum 
 */

// 给定一个嵌套的整数列表，请返回该列表按深度加权后所有整数的总和。

// 每个元素要么是整数，要么是列表。同时，列表中元素同样也可以是整数或者是另一个列表。

// 示例 1:

// 输入: [[1,1],2,[1,1]]
// 输出: 10 
// 解释: 因为列表中有四个深度为 2 的 1 ，和一个深度为 1 的 2。
// 示例 2:

// 输入: [1,[4,[6]]]
// 输出: 27 
// 解释: 一个深度为 1 的 1，一个深度为 2 的 4，一个深度为 3 的 6。所以，1 + 4*2 + 6*3 = 27。

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
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
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
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {

  function handleList(list, d) {
      let sum = 0
      // console.log(list)
      for (let i = 0; i < list.length; i ++) {
          let item = list[i]
          if (item.isInteger()) {
              sum += d * item.getInteger()
          } else {
              sum += handleList(item.getList(), d+1)
          }
      }

      return sum
  }
  
  return handleList(nestedList, 1)
};