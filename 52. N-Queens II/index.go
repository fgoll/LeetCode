package totalNQueens

func totalNQueens(n int) int {
	total := 0

	for i := 0; i < n; i++ {
		backtrack(&total, [][]int{[]int{0, i}}, n)
	}

	return total
}

func backtrack(total *int, queens [][]int, n int) {
	if len(queens) == n {
		*total += 1
		return
	}

	for i := 0; i < n; i++ {
		if !check(len(queens), i, queens) {
			continue
		}
		queens = append(queens, []int{len(queens), i})
		backtrack(total, queens, n)
		queens = queens[:len(queens)-1]
	}
}

func check(x, y int, queens [][]int) (res bool) {

	res = true

	if len(queens) == 0 {
		return
	}

	for _, queen := range queens {
		if x == queen[0] ||
			y == queen[1] ||
			x+y == queen[0]+queen[1] ||
			x-y == queen[0]-queen[1] {
			res = false
			return
		}
	}

	return
}
