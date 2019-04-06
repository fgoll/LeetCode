/**
 * 96. Unique Binary Search Trees
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
 * Example:
 *  Input: 3
 *  Output: 5
 *  Explanation:
 *  Given n = 3, there are a total of 5 unique BST's:
 *  1         3     3      2      1
 *   \       /     /      / \      \
 *    3     2     1      1   3      2
 *   /     /       \                 \
 *  2     1         2                 3
 */

/**
 * 设G(n)为n个结点所构造的唯一二叉搜索树的数量
 * F(i, n) 为n个结点中以i为根所构成唯一二叉搜索树的数量
 * G(n) = F(1, n) + F(2, n) + ... + F(n, n)
 * F(i, n) = G(i-1) * G(n-i) 因为在 F(i, n) 中 左侧有i-1个结点所能构成二叉搜索树为G(i-1) 右侧有n-i个结点 故为G(n-i)
 * ∴ G(n) = G(0)*G(n-1) + G(1) * G(n-2) + ... + G(n-1) * G(0)
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let G = []
  for (let i = 0; i <= n; i ++) {
    G[i] = 0
  }
  G[0] = G[1] = 1

  for (let i = 2; i <= n; i ++) {
    for (let j = 1; j <= i; j ++) {
      
      G[i] += (G[j-1] * G[i-j])
    }

  }

  return G[n]
};

console.log(numTrees(3))