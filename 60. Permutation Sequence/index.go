package getPermutation

import "strconv"

func getPermutation(n int, k int) string {

	numbers := []int{}
	factorial := 1
	res := ""

	for i := 1; i <= n; i++ {
		factorial *= i
		numbers = append(numbers, i)
	}

	k--
	for i := 0; i < n; i++ {
		factorial /= (n - i)
		index := k / factorial
		res += strconv.Itoa(numbers[index])
		numbers = append(numbers[:index], numbers[index+1:]...)
		k -= (factorial * index)
	}

	return res
}
