package uniquePathsWithObstacles

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	n, m := len(obstacleGrid), len(obstacleGrid[0])
	
	if obstacleGrid[0][0] == 1 {
		return 0
	}

	obstacleGrid[0][0] = 1

	for i := 1; i < n; i ++ {
		if obstacleGrid[i][0] == 0 && obstacleGrid[i-1][0] == 1 {
			obstacleGrid[i][0] = 1
		}else {
			obstacleGrid[i][0] = 0
		}
	}

	for i := 1; i < m; i ++ {
		if obstacleGrid[0][i] == 0 && obstacleGrid[0][i-1] == 1 {
			obstacleGrid[0][i] = 1
		}else {
			obstacleGrid[0][i] = 0
		}
	}

	for i := 1; i < n; i ++ {
		for j := 1; j < m; j ++ {
			if obstacleGrid[i][j] == 0 {
				obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
			}else {
				obstacleGrid[i][j] = 0
			}
		}
	}

	return obstacleGrid[n-1][m-1]
}