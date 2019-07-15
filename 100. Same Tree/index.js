/**
 * 100. Same Tree
 * 
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *  
 * Example 1:
 *  Input:     1         1
              / \       / \
             2   3     2   3

            [1,2,3],   [1,2,3]
    Output: true
    
 * Example 2:
 *  Input:     1         1
              /           \
             2             2

            [1,2],     [1,null,2]
    Output: false
    
 * Example 3:
 *  Input:     1         1
              / \       / \
             2   1     1   2

            [1,2,1],   [1,1,2]
    Output: false
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  
  return travePre(p, q)
};

function travePre(p, q) {
  
  let qstack = q ? [q] : []
  let pstack = p ? [p] : []

  while (qstack.length !== 0 || pstack.length !== 0) {
    p = pstack.pop()
    q = qstack.pop()

    if ((p && !q) || (!p && q)) return false

    if (p && q) {
      if(p.val !== q.val) return false
      qstack.push(q.left)
      qstack.push(q.right)
      pstack.push(p.left)
      pstack.push(p.right)
    }
    
  }

  return true;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};