package simplifyPath

import "strings"

func simplifyPath(path string) string {
	paths := strings.Split(path, "/")

	stack := make([]string, 0)

	for _, dir := range paths {
		if dir == "" || dir == "." {
			continue
		}
		if dir == ".." {
			if len(stack) != 0 {
				stack = stack[:len(stack)-1]
			}
		} else {
			stack = append(stack, dir)
		}
	}

	if (len(stack) == 0) {
		return "/"
	}

	return "/" + strings.Join(stack, "/")
}
