package isInterleave

func isInterleave(s1 string, s2 string, s3 string) bool {
	if len(s1)+len(s2) != len(s3) {
		return false
	}

	dp := make([][]bool, len(s1)+1)
	for i := 0; i <= len(dp); i++ {
		dp[i] = make([]bool, len(s2))
	}

	for i := 0; i <= len(s1); i++ {
		for j := 0; j <= len(s2); j++ {
			if i == 0 && j == 0 {
				dp[i][j] = true
			} else if i == 0 {
				dp[i][j] = s2[j-1] == s3[i+j-1] && dp[i][j-1]
			} else if j == 0 {
				dp[i][j] = s1[i-1] == s3[i+j-1] && dp[i-1][j]
			} else {
				dp[i][j] = (s2[j-1] == s3[i+j-1] && dp[i][j-1]) || (s1[i-1] == s3[i+j-1] && dp[i-1][j])
			}
		}
	}

	return dp[len(s1)][len(s2)]
}
