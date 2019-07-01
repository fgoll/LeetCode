package combine

func combine(n int, k int) [][]int {
	res := [][]int{}

	backtrack(n, k, 1, []int{}, &res)

	return res
}

func backtrack(n, k, start int, path []int, res *[][]int) {

	if len(path) == k {
		temp := append([]int(nil), path...)
		*res = append(*res, temp)
	}

	for i := start; i <= n; i ++ {
		path = append(path, i)
		backtrack(n, k, i + 1, path, res)
		path = path[:len(path)-1]
	}
}
