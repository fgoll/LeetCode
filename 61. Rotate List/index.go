package rotateRight

type ListNode struct {
	Val  int
	Next *ListNode
}

func rotateRight(head *ListNode, k int) *ListNode {
	temp := &ListNode{
		Next: head,
	}

	fast, slow := temp, temp

	len := 0

	for fast.Next != nil {
		len++
		fast = fast.Next
	}

	for i := 0; i < (len - k % len); i ++ {
		slow = slow.Next
	}

	fast.Next = temp.Next
	temp.Next = slow.Next
	slow.Next = nil

	return temp.Next
}
