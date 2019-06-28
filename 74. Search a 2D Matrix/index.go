package searchMatrix

func searchMatrix(matrix [][]int, target int) bool {

	row := len(matrix)
	if row == 0 {
		return false
	}
	col := len(matrix[0])

	low, high := 0, row*col-1

	for low <= high {
		mid := (low + high) >> 1
		i, j := mid/col, mid%col

		if matrix[i][j] > target {
			high = mid - 1
		} else if matrix[i][j] < target {
			low = mid + 1
		} else {
			return true
		}
	}
	return false
}
