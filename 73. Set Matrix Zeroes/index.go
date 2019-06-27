package setZeros

func setZeroes(matrix [][]int) {
	fr, fc := false, false
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 0 {
				if i == 0 {
					fr = true
				}
				if j == 0 {
					fc = true
				}
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[i]); j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if fr {
		for i := 0; i < len(matrix[0]); i++ {
			matrix[0][i] = 0
		}
	}
	if fc {
		for i := 0; i < len(matrix); i++ {
			matrix[i][0] = 0
		}
	}
}
