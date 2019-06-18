package lengthOfLastWord

func lengthOfLastWord(s string) int {
	if len(s) == 0 {
		return 0
	}

	begin := false
	var last int
	var i int

	for i = len(s) - 1; i >= 0; i-- {

		if begin {

			if s[i] == ' ' {
				break
			}
		} else if s[i] != ' ' {
			begin = true
			last = i
		}
	}

	if !begin {
		return 0
	}

	return last - i
}
