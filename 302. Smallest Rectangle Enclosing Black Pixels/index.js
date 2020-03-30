/**
 * 302. Smallest Rectangle Enclosing Black Pixels    
 * 
 * 图片在计算机处理中往往是使用二维矩阵来表示的。
 * 
 * 假设，这里我们用的是一张黑白的图片，那么 0 代表白色像素，1 代表黑色像素。
 *  
 * 其中黑色的像素他们相互连接，也就是说，图片中只会有一片连在一块儿的黑色像素（像素点是水平或竖直方向连接的）。
 * 那么，给出某一个黑色像素点 (x, y) 的位置，你是否可以找出包含全部黑色像素的最小矩形（与坐标轴对齐）的面积呢？
 * 
 * 示例:
 *  输入:
 *  [
 *    "0010",
 *    "0110",
 *    "0100"
 *  ]
 *  和 x = 0, y = 2
 *  输出: 6
 */

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(images, x0, y0) {
  let minX = images.length, minY = images[0].length
  let maxX = 0, maxY = 0

  function traverse(image, x, y) {
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length) return 0
    if (image[x][y] !== '1') return 0
    minX = Math.min(minX, x)
    maxX = Math.max(maxX, x)
    minY = Math.min(minY, y)
    maxY = Math.max(maxY, y)
    image[x][y] = 'x'
    let top = traverse(image, x - 1, y)
    let down = traverse(image, x + 1, y)
    let left = traverse(image, x, y - 1)
    let right = traverse(image, x, y + 1)

    return top + down + left + right + 1
  }
  traverse(images, x0, y0)

  return (maxY - minY + 1) * (maxX - minX + 1)
};