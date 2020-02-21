/**
 * 332. Reconstruct Itinerary
 * 
 * Given a list of airline tickets represented by pairs of departure and arrival 
 * airports [from, to], reconstruct the itinerary in order. All of the tickets 
 * belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
 * 
 * Note:
 *    If there are multiple valid itineraries, you should return the itinerary that 
 * has the smallest lexical order when read as a single string. For example, 
 * the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
 *    All airports are represented by three capital letters (IATA code).
 *    You may assume all tickets form at least one valid itinerary.
 * 
 * Example 1:
 *    Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 *    Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
 * 
 * Example 2:
 *    Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 *    Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 *    Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
 *                 But it is larger in lexical order.
 */

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let map = {}
  for (let ticket of tickets) {
    let [from, to] = ticket
    if (!map[from]) map[from] = []

    map[from].push(to)

  }
  
  Object.keys(map).forEach(key => {
    map[key].sort((a, b) => {
        if (a > b) return 1
        else if (a === b) return 0
        else return -1
    });
  });
  let path = []
  function dfs(key) { 
    let arrivals = map[key]

    while (arrivals && arrivals.length !== 0) {
      dfs(arrivals.shift())
    }

    path.push(key);
  }

  dfs("JFK")
  return path.reverse()
};