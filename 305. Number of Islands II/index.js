/**
 * 305. Number of Islands II    
 */

// 假设你设计一个游戏，用一个 m 行 n 列的 2D 网格来存储你的游戏地图。

// 起始的时候，每个格子的地形都被默认标记为「水」。我们可以通过使用 addLand 进行操作，将位置 (row, col) 的「水」变成「陆地」。

// 你将会被给定一个列表，来记录所有需要被操作的位置，然后你需要返回计算出来 每次 addLand 操作后岛屿的数量。

// 注意：一个岛的定义是被「水」包围的「陆地」，通过水平方向或者垂直方向上相邻的陆地连接而成。你可以假设地图网格的四边均被无边无际的「水」所包围。

// 请仔细阅读下方示例与解析，更加深入了解岛屿的判定。

// 示例:

// 输入: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
// 输出: [1,1,2,3]
// 解析:

// 起初，二维网格 grid 被全部注入「水」。（0 代表「水」，1 代表「陆地」）

// 0 0 0
// 0 0 0
// 0 0 0
// 操作 #1：addLand(0, 0) 将 grid[0][0] 的水变为陆地。

// 1 0 0
// 0 0 0   Number of islands = 1
// 0 0 0
// 操作 #2：addLand(0, 1) 将 grid[0][1] 的水变为陆地。

// 1 1 0
// 0 0 0   岛屿的数量为 1
// 0 0 0
// 操作 #3：addLand(1, 2) 将 grid[1][2] 的水变为陆地。

// 1 1 0
// 0 0 1   岛屿的数量为 2
// 0 0 0
// 操作 #4：addLand(2, 1) 将 grid[2][1] 的水变为陆地。

// 1 1 0
// 0 0 1   岛屿的数量为 3
// 0 1 0
// 拓展：

// 你是否能在 O(k log mn) 的时间复杂度程度内完成每次的计算？（k 表示 positions 的长度）

function UnionFind(N) {
  this.count = 0
  this.parent = []
  this.rank = []
  for (let i = 0; i < N; i ++) {
    this.parent.push(-1)
    this.rank.push(0)
  }
}

UnionFind.prototype.isValid = function(i) {
  return this.parent[i] >= 0
}

UnionFind.prototype.setParent = function(i) {
  if (this.parent[i] === i) return
  this.parent[i] = i
  this.count ++
}

UnionFind.prototype.find = function(i) {
  if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])  
  return this.parent[i]
}

UnionFind.prototype.union = function(x, y) {
  let rootx = this.find(x)
  let rooty = this.find(y)

  if (rootx !== rooty) {
    if (this.rank[rootx] > this.rank[rooty]) this.parent[rooty] = rootx
    else if (this.rank[rootx] < this.rank[rooty]) this.parent[rootx] = rooty
    else {
      this.parent[rooty] = rootx
      this.rank[rootx] += 1
    }

    this.count --
  }
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {

  function getIndex(r, c) {
    return r * n  + c
  }

  let res = []
  let uf = new UnionFind(m * n)

  for (let pos of positions) {
    let [r, c] = pos

    let overlap = []

    if (r - 1 >= 0 && uf.isValid(getIndex(r-1, c))) overlap.push(getIndex(r-1, c))
    if (r + 1 < m && uf.isValid(getIndex(r+1, c))) overlap.push(getIndex(r+1, c))
    if (c - 1 >= 0 && uf.isValid(getIndex(r, c-1))) overlap.push(getIndex(r, c-1))
    if (c + 1 < n && uf.isValid(getIndex(r, c+1))) overlap.push(getIndex(r, c+1))

    let index = getIndex(r, c)
    uf.setParent(index)

    for (let i of overlap) {
      uf.union(i, index)
    }

    res.push(uf.count)
  }

  return res
};