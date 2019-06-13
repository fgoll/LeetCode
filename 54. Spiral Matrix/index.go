/**
 * 54. Spiral Matrix
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * Example 1:
 *  Input:
 *  [
 *    [ 1, 2, 3 ],
 *    [ 4, 5, 6 ],
 *    [ 7, 8, 9 ]
 *  ]
 *  Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 *  Input:
 *  [
 *    [1, 2, 3, 4],
 *    [5, 6, 7, 8],
 *    [9,10,11,12]
 *  ]
 *  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

package spiralOrder

func spiralOrder(matrix [][]int) []int {
	res := []int{}
	if len(matrix) == 0 {
		return res
	}

	row1, row2, col1, col2 := 0, len(matrix)-1, 0, len(matrix[0])-1

	for row1 <= row2 && col1 <= col2 {
		for i := col1; i <= col2; i++ {
			res = append(res, matrix[row1][i])
		}
		for i := row1 + 1; i <= row2; i++ {
			res = append(res, matrix[i][col2])
		}

		// handle
		// [[1,2, 3, 4],
		//  [5,6, 7, 8],
		// [ 9,10,11,12]]
		if (row1 < row2 && col1 < col2) {
			for i := col2 - 1; i >= col1; i-- {
				res = append(res, matrix[row2][i])
			}
			for i := row2 - 1; i > row1; i-- {
				res = append(res, matrix[i][col1])
			}
		}
		

		row1++
		row2--
		col1++
		col2--
	}

	return res
}
