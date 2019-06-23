package plusOne

func plusOne(digits []int) []int {

	for i := len(digits) - 1; i >= 0; i-- {
		if digits[i] < 9 {
			digits[i] += 1
			return digits
		}
		digits[i] = 0
	}

	newDigits := make([]int, len(digits)+1)
	newDigits[0] = 1
	return newDigits
}
