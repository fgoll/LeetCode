package partition

/**
 * Definition for singly-linked list.
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

func partition(head *ListNode, x int) *ListNode {
	beforeTemp, afterTemp := &ListNode{}, &ListNode{}
	before, after := beforeTemp, afterTemp

	for head != nil {
		if head.Val < x {
			before.Next = head
			before = before.Next
		} else {
			after.Next = head
			after = after.Next
		}
		head = head.Next
	}

	after.Next = nil
	before.Next = afterTemp.Next

	return beforeTemp.Next
}
