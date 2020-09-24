/**
 * 449. Serialize and Deserialize BST
 * 
 * Serialization is the process of converting a data structure or object into a sequence of 
 * bits so that it can be stored in a file or memory buffer, or transmitted across a network 
 * connection link to be reconstructed later in the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary search tree. 
 * There is no restriction on how your serialization/deserialization algorithm should work. 
 * You just need to ensure that a binary search tree can be serialized to a string and this 
 * string can be deserialized to the original tree structure.
 * 
 * The encoded string should be as compact as possible.
 * 
 * Note: Do not use class member/global/static variables to store states. 
 * Your serialize and deserialize algorithms should be stateless.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let order = []
  function inorder(root) {
    if (!root) { 
        return
    }
    for (let i = 0; i < 4; i ++) {
      let c = (root.val >> (i * 8) & 0xff)
      order.push(c)
    }
    inorder(root.left)
    inorder(root.right)
  }

  inorder(root)
  return order
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let n = data.length
  let order = []
    // console.log(data)
  for (let i = 0; i < n / 4; i ++) {
    let result = 0
    for (let j = 3; j >= 0; j --) {
        
      result = result * 256 + data[i * 4 + j]
    }
    order.push(result)
  }
// console.log(order)
  let pos = 0
  function helper(lower, upper) {
    if (pos >= order.length) {
        pos -= 1
        return null
    }
    let val = order[pos]
    if (val < lower || val > upper) {
        pos -= 1
        return null
    }
    let root = new TreeNode(val)
    pos += 1
    root.left = helper(lower, val)
    pos += 1
    root.right = helper(val, upper)

    return root
  }

  return helper(-Number.MAX_VALUE, Number.MAX_VALUE)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */