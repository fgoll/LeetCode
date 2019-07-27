package isBalanced

import "math"

/**
 * Definition for a binary tree node.
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isBalanced(root *TreeNode) bool {
	return dfsHeight(root) != -1
}

func dfsHeight(node *TreeNode) float64 {
	if node == nil {
		return 0
	}

	leftHeight := dfsHeight(node.Left)
	if leftHeight == -1 {
		return leftHeight
	}
	rightHeight := dfsHeight(node.Right)
	if rightHeight == -1 {
		return rightHeight
	}
	if math.Abs(leftHeight-rightHeight) > 1 {
		return -1
	}

	return math.Max(leftHeight, rightHeight) + 1
}
