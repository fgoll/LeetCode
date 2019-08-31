/**
 * 144. Binary Tree Preorder Traversal
 * 
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Example:
 *  Input: [1,null,2,3]
 *      1
 *       \
 *        2
 *       /
 *      3
 *  Output: [1,2,3]
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let res = []
  travPrev(root, (val) => {
    res.push(val)
  })
  return res
};

function visitAlongLeftBranch(x, visit, S) {
	while (x) {
		visit(x.data);
		S.push(x.rChild);
		x = x.lChild;
	}
}


function travPrev(x, visit) {
	var S = [];
	while (true) {
		visitAlongLeftBranch(x, visit, S);
		if (S.length === 0) break;
		x = S.pop();
	}
}