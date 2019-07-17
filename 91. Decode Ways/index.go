package numDecodings

import "strconv"

func numDecodings(s string) int {
	n := len(s)
	if n == 0 {
		return 0
	}

	dp := make([]int, n+1)
	dp[0] = 1
	if s[0] == '0' {
		dp[1] = 0
	} else {
		dp[1] = 1
	}

	for i := 2; i <= n; i++ {
		first, _ := strconv.Atoi(s[i-1 : i])
		second, _ := strconv.Atoi(s[i-2 : i])

		if first >= 1 && first <= 9 {
			dp[i] += dp[i-1]
		}
		if second >= 10 && second <= 26 {
			dp[i] += dp[i-2]
		}
	}

	return dp[n]
}
