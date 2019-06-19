/**
 * 59. Spiral Matrix II
 * 
 * Given a positive integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.
 * 
 * Example:
 *  Input: 3
 *  Output:
 *  [
 *    [ 1, 2, 3 ],  
 *    [ 8, 9, 4 ],
 *    [ 7, 6, 5 ]
 *  ]
 */


const DIR = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left'
}

 /**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {

   let map = {}

   let i = 0,
     l = n * n

   let x = 0,
     y = 0

   let dir = n === 1 ? DIR.down : DIR.right

   let res = [...Array(n)].map(_ => [...Array(n)])

   while (i < l) {
     res[x][y] = i + 1
     map[`${x},${y}`] = true
     i++
     if (dir === DIR.right) {
       y++
       if (y >= n - 1 || map[`${x},${y+1}`]) {
         dir = DIR.down
       }
     } else if (dir === DIR.down) {
       x++
       if (x >= n - 1 || map[`${x+1},${y}`]) {
         dir = DIR.left
       }
     } else if (dir === DIR.left) {
       y--
       if (y <= 0 || map[`${x},${y-1}`]) {
         dir = DIR.up
       }
     } else {
       x--
       if (x <= 0 || map[`${x-1},${y}`]) {
         dir = DIR.right
       }
     }
   }

   return res

 };