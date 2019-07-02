package removeDuplicates

func removeDuplicates(nums []int) int {
	i, j, cnt := 1, 1, 1

	for j < len(nums) {
		if nums[j] != nums[j-1] {
			nums[i] = nums[j]
			cnt = 1
			i++
		} else {
			if cnt < 2 {
				cnt++
				i++
			}
		}
		j++
	}

	return i
}
