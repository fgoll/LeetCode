/**
 * 47. Permutations II
 *
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 *
 * Example:
 *  Input: [1,1,2]
 *  Output:
 *    [
 *      [1,1,2],
 *      [1,2,1],
 *      [2,1,1]
 *    ]
 */

package permuteUnique

import "sort"

func permuteUnique(nums []int) [][]int {
	res := [][]int{}

	sort.Ints(nums)

	used := make([]bool, len(nums))

	backtrack(&res, nums, []int{}, used)

	return res
}

func backtrack(res *[][]int, nums, list []int, used []bool) {
	if len(list) == len(nums) {
		// temp := make([]int, len(list))
		// copy(temp, list)
		temp := append([]int(nil), list...)
		*res = append(*res, temp)
	}

	for i := 0; i < len(nums); i++ {
		if !used[i] || (i > 0 && nums[i] == nums[i-1] && used[i-1]) {
			continue
		}

		list, used[i] = append(list, nums[i]), true
		backtrack(res, nums, list, used)
		list, used[i] = list[:len(list)-1], false
	}
}
