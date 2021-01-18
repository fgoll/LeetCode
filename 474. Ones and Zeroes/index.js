/**
 * 474. Ones and Zeroes
 * 
 * https://leetcode.com/problems/ones-and-zeroes/
 */

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {

  let memo = [...Array(m+1)].map((_) => [...Array(n+1)].map(_ => 0))
  
  for (let s of strs) {
    let numZeros = numOnes = 0
    for (let c of s) {
      if (c === '0') numZeros ++
      else if (c === '1') numOnes ++
    }
    for (let i = m; i >= numZeros; i --) {
      for (let j = n; j>= numOnes; j --) {
        memo[i][j] = Math.max(memo[i][j], memo[i - numZeros][j - numOnes] + 1) // i个0 和 j个1 = 
      }
    }
  }

  return memo[m][n]
};

// 01背包问题中，如果不考虑空间优化，则从大到小或从小到大枚举都可以； 如果考虑优化，则需要从大到小枚举。 这里我直接举一个实际例子来说明； 题目描述为：有一个容量为 V 的背包，和一些物品。这些物品分别有两个属性，体积 w 和价值 v，每种物品只有一个。要求用这个背包装下价值尽可能多的物品，求该最大价值，背包可以不被装满。

// 状态为dp[i][j],表示前i个物品放入容量为j时达到的最大价值；

// 状态转移方程为: j<w，dp[i][j] = dp[i-1][j] //背包装不下该物品，最大价值不变

// j>=w, dp[i][j] = max{ dp[i-1][j-list[i].w] + list[i].v, dp[i-1][j] } //和不放入该物品时同样达到该体积的最大价值比较

// 其中,list[i].w表示第i件物品的体积，list[i].v表示第i件物品的价值

// 1、不考虑优化的从小到大枚举

// #include<cstdio>

// int max(int a, int b)//取最大值函数
// {
//     return a > b ? a : b;
// }

// struct Thing
// {
//     int w;
//     int v;
// }list[101];

// int dp[101][1001];

// int main()
// {
//     int s, n;//背包容量和物品总数
//     while (scanf("%d%d", &s, &n) != EOF)
//     {
//         for (int i = 1; i <= n; i++)
//         {
//             scanf("%d%d", &list[i].w, &list[i].v);//读入每个物品的体积和价值
//         }
//         for (int i = 0; i <= s; i++) dp[0][i] = 0;//初始化二维数组
//         for (int i = 1; i <= n; i++)//循环每个物品，执行状态转移方程
//         {
//             for (int j = 0; j <= s; j++)
//             {
//                 if (j >= list[i].w)dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - list[i].w] + list[i].v);
//                 else dp[i][j] = dp[i - 1][j];
//             }
//         }
//         printf("%d\n", dp[n][s]);
//     }
//     return 0;
// }
// 2、考虑优化的从大到小的枚举

// #include<cstdio>

// int max(int a, int b)//取最大值函数
// {
//     return a > b ? a : b;
// }

// struct Thing
// {
//     int w;
//     int v;
// }list[101];

// int dp[1001];

// int main()
// {
//     int s, n;//背包容量和物品总数
//     while (scanf("%d%d", &s, &n) != EOF)
//     {
//         for (int i = 1; i <= n; i++)
//         {
//             scanf("%d%d", &list[i].w, &list[i].v);//读入每个物品的体积和价值
//         }
//         for (int i = 0; i <= s; i++) dp[i] = 0;//初始化一维数组
//         for (int i = 1; i <= n; i++)//循环每个物品，逆序遍历j执行状态转移方程
//         {
//             for (int j = s; j >= list[i].w; j--)
//             {
//                 dp[j] = max(dp[j], dp[j - list[i].w] + list[i].v);
//             }
//         }
//         printf("%d\n", dp[s]);
//     }
//     return 0;
// }
// 现在，我们来举例说明一下优化代码中j从大到小枚举和从小到大枚举的区别：

// 对于从小到大枚举的代码

//             for (int j =list[i].w; j <= s; j--)
//             {
//                 dp[j] = max(dp[j], dp[j - list[i].w] + list[i].v);
//             }
// 来说，假设s=8; 当i = 1时，list[i].w=4；一次得到dp[j]的值如下：

// dp[4] = max(dp[4], dp[0]+list[i].v)

// dp[5] = max(dp[5], dp[1]+list[i].v)

// dp[6] = max(dp[6], dp[2]+list[i].v)

// dp[7] = max(dp[7], dp[3]+list[i].v)

// dp[8] = max(dp[8], dp[4]+list[i].v)

// 发现没，在计算dp[8]时，dp[8]=dp[4]+list[i].v,而在前面计算dp[4]时，已经计算得到dp[4]=dp[0]+list[i].v=list[i].v。 所以这样计算出来的dp[8] = 2*list[i].v，不满足题目中每个物品只有一个的要求；

// 如果是从大到小的枚举代码

//             for (int j =s; j >= list[i].w]; j--)
//             {
//                 dp[j] = max(dp[j], dp[j - list[i].w] + list[i].v);
//             }
// 当i=1时，一次得到dp[j]的值如下：

// dp[8] = max(dp[8], dp[4]+list[1].v)=list[1].v

// dp[7] = max(dp[7], dp[3]+list[1].v)=list[1].v

// dp[6] = max(dp[6], dp[2]+list[1].v)=list[1].v

// dp[5] = max(dp[5], dp[1]+list[1].v)=list[1].v

// dp[4] = max(dp[4], dp[0]+list[1].v)=list[1].v

// 当i=2时，一次得到dp[j]的值如下：

// dp[8] = max(dp[8], dp[4]+list[2].v)=max(list[1].v, dp[4]+list[2].v)=max(list[1].v, list[1].v+list[2].v)

// dp[7] = max(dp[7], dp[3]+list[2].v)=max(list[1].v, dp[3]+list[2].v)

// dp[6] = max(dp[6], dp[2]+list[2].v)=max(list[1].v, dp[2]+list[2].v)

// dp[5] = max(dp[5], dp[1]+list[2].v)=max(list[1].v, dp[1]+list[2].v)

// dp[4] = max(dp[4], dp[0]+list[2].v)=max(list[1].v, dp[0]+list[2].v)

// 所以，为保证每个物品只能使用一次，我们倒序遍历所有j的值，这样在更新dp[j]的时候，dp[j-list[i].w]的值尚未被修改，就不会出现一个物品重复使用的问题。