/**
 * 98. Validate Binary Search Tree
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows:
 *    The left subtree of a node contains only nodes with keys less than the node's key.
 *    The right subtree of a node contains only nodes with keys greater than the node's key.
 *    Both the left and right subtrees must also be binary search trees.
 * 
 * Example:
 *  Input:
 *      2
 *     / \
 *    1   3
 * Output: true
 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function BST(root) {
  this.root = new TreeNode(root)
  this.hot = null
}

BST.prototype.searchIn = function(v, e) {
  if (!v || (e === v.val)) return v;
  this.hot = v;
  return this.searchIn(((e < v.val) ? v.left : v.right), e);
}

BST.prototype.search = function(e) {
  return this.searchIn(this.root, e);
}

BST.prototype.insert = function(e) {
  let x = this.search(e);
  if (x) return x;

  x = new TreeNode(e);
  // if (this.hot) {
    if (this.hot.val < e) {
      this.hot.right = x
    }else {
      this.hot.left = x
    }
  // }
  return x;
}

BST.prototype.get = function() {
  if (!this.root) return []
  let queue = [this.root] 

  let arr = []
  while (queue.length !== 0) {
    let node = queue.shift()
    if (node) {
      arr.push(node.val)
    }else {
      arr.push(null)
    }
    if (node) {
      queue.push(node.left)
      queue.push(node.right)
    }
    
  }
  return arr
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  
  if (!root) return true

  let bst

  let queue = []

  let arr = []

  queue.push(root)

  while (queue.length !== 0) {
    let node = queue.shift()

    if (node) {
      arr.push(node.val)
      if (!bst) {
        bst = new BST(node.val)
      }else {
        bst.insert(node.val)
      }
  
    }else {
      arr.push(null)
    }


    if (node) {
      queue.push(node.left)
      queue.push(node.right)
    }

  }

  let arr2 = bst.get()
  console.log(arr2)
  console.log(arr)
  if (arr.length != arr2.length) return false

  for (let i = 0; i < arr2.length; i ++) {
    if (arr2[i] !== arr[i]) {
      return false
    }
  }

  return true
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST2 = function (root) {
  
  let stack = []

  let inorder = -Number.MAX_VALUE

  while (stack.length !== 0 || root !== null) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()

    if (root.val <= inorder) return false
    inorder = root.val
    root = root.right
  }

  return true
}

let root = new TreeNode(0)
// root.left = new TreeNode(1)
// root.left.left = new TreeNode(1)
root.right = new TreeNode(-1)
console.log(isValidBST2(root))
// [0,null,-1]