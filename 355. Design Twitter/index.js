/**
 * 355. Design Twitter
 * 
 * Design a simplified version of Twitter where users can post tweets, 
 * follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. 
 * Your design should support the following methods:
 * 
 *    1. postTweet(userId, tweetId): Compose a new tweet.
 *    2. getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. 
 *  Each item in the news feed must be posted by users who the user followed or by the user herself. 
 *  Tweets must be ordered from most recent to least recent.
 *    3. follow(followerId, followeeId): Follower follows a followee.
 *    4. unfollow(followerId, followeeId): Follower unfollows a followee.
 * 
 * Example:
 *    Twitter twitter = new Twitter();
 *    
 *    // User 1 posts a new tweet (id = 5).
 *    twitter.postTweet(1, 5);
 * 
 *    // User 1's news feed should return a list with 1 tweet id -> [5].
 *    twitter.getNewsFeed(1);
 * 
 *    // User 1 follows user 2.
 *    twitter.follow(1, 2);
 *  
 *    // User 2 posts a new tweet (id = 6).
 *    twitter.postTweet(2, 6);
 *    
 *    // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
 *    // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
 *    twitter.getNewsFeed(1);
 * 
 *    // User 1 unfollows user 2.
 *    twitter.unfollow(1, 2);
 * 
 *    // User 1's news feed should return a list with 1 tweet id -> [5],
 *    // since user 1 is no longer following user 2.
 *    twitter.getNewsFeed(1);
 */

var __extends = (this && this.__extends) || (function () {
  var extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return function (d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var Vector = /** @class */ (function () {
  function Vector(elem) {
      elem = elem || [];
      this._elem = elem.slice();
  }
  Vector.prototype.length = function () {
      return this._elem.length;
  };
  Vector.prototype.uniquify = function () {
      var i = 0, j = 0;
      while (++j < this._elem.length) {
          if (this._elem[i] != this._elem[j]) {
              this._elem[++i] = this._elem[j];
          }
      }
      i++;
      this._elem.length = i;
      return j - i;
  };
  Vector.prototype.set = function (r, e) {
      this._elem[r] = e;
  };
  Vector.prototype.get = function (r) {
      return this._elem[r];
  };
  Vector.prototype.find = function (e, lo, hi) {
      while ((lo < hi--) && (e < this._elem[hi]))
          ;
      return hi;
  };
  Vector.prototype.search = function (e) {
      return this.find(e, 0, this._elem.length);
  };
  Vector.prototype.insert = function (r, e) {
      for (var i = this.length(); i > r; i--) {
          this._elem[i] = this._elem[i - 1];
      }
      this._elem[r] = e;
      return r;
  };
  Vector.prototype.removeIn = function (lo, hi) {
      if (lo == hi)
          return 0;
      while (hi < this.length())
          this._elem[lo++] = this._elem[hi++];
      this._elem.length = lo;
      return hi - lo;
  };
  Vector.prototype.remove = function (r) {
      var e = this._elem[r];
      this.removeIn(r, r + 1);
      return e;
  };
  Vector.prototype.heapSort = function () {
      var size = this.length();
      var H = new PQ_ComplHeap(this._elem, size);
      while (!H.empty()) {

          this._elem[--size] = H.delMax();
      }
  };
  return Vector;
}());
function inHeap(n, i) {
  return i >= 0 && i < n;
}
function parentVaild(i) {
  return i > 0;
}
function parent(i) {
  return (i - 1) >> 1;
}
function lastInternal(n) {
  return parent(n - 1);
}
function bigger(PQ, i, j) {
  return PQ[i].time > PQ[j].time ? i : j;
}
function lChild(i) {
  return 1 + (i << 1);
}
function rChild(i) {
  return (i + 1) << 1;
}
function rChildValid(n, i) {
  return inHeap(n, rChild(i));
}
function lChildValid(n, i) {
  return inHeap(n, lChild(i));
}
function properParent(PQ, n, i) {
  return rChildValid(n, i) ? bigger(PQ, bigger(PQ, i, lChild(i)), rChild(i)) :
      lChildValid(n, i) ? bigger(PQ, i, lChild(i)) : i;
}
var PQ_ComplHeap = /** @class */ (function (_super) {
  __extends(PQ_ComplHeap, _super);
  function PQ_ComplHeap(A, n) {
      var _this = _super.call(this, A) || this;
      if (n) {
          _this.heapify(n);
      }
      return _this;
  }
  PQ_ComplHeap.prototype.percolateDown = function (n, i) {
      var j;
      while (i != (j = properParent(this._elem, n, i))) {
          _a = [this._elem[j], this._elem[i]], this._elem[i] = _a[0], this._elem[j] = _a[1];
          i = j;
      }
      return i;
      var _a;
  };
  PQ_ComplHeap.prototype.percolateUp = function (i) {
      while (parentVaild(i)) {

          var j = parent(i);
          if (this._elem[i].time <= this._elem[j].time)
              break;
          _a = [this._elem[j], this._elem[i]], this._elem[i] = _a[0], this._elem[j] = _a[1];
          i = j;
      }
      var _a;
  };
  PQ_ComplHeap.prototype.heapify = function (n) {
      for (var i = lastInternal(n); inHeap(n, i); i--) {
          this.percolateDown(n, i);
      }
  };
  PQ_ComplHeap.prototype.empty = function () {
      return this._elem.length === 0;
  };
  PQ_ComplHeap.prototype.insertH = function (e) {
      this.insert(this.length(), e);
      this.percolateUp(this.length() - 1);
  };
  PQ_ComplHeap.prototype.getMax = function () {
      return this._elem[0];
  };
  PQ_ComplHeap.prototype.delMax = function () {
      var maxElem = this._elem[0];
      if (this._elem.length > 1) {
          this._elem[0] = this._elem.pop();
          this.percolateDown(this.length(), 0);
      }
      else {
          this._elem.pop();
      }
      return maxElem;
  };
  return PQ_ComplHeap;
}(Vector));


const timestamp = 0 

var Tweet = function(id) {
  this.id = id
  this.time = timestamp++
  this.next = null
}

var User = function(id) {
  this.id = id
  this.followed = new Set()
  this.follow(id) // follow itself
  this.tweetHead = null
}

User.prototype.follow = function(id) {
  this.followed.add(id)
}

User.prototype.unfollow = function(id) {
  this.followed.delete(id)
}

User.prototype.post = function(id) {
  let tweet = new Tweet(id)
  tweet.next = this.tweetHead
  this.tweetHead = tweet

}

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.userMap = {}
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  if (!this.userMap[userId]) {
    let user = new User(userId)
    this.userMap[userId] = user
  }
  this.userMap[userId].post(tweetId)
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  let res = []
  
  if (!this.userMap[userId]) return res

  const users = this.userMap[userId].followed
  let q = new PQ_ComplHeap();
  for (let id of users) {
    let tweet = this.userMap[id].tweetHead
    if (tweet) {
      q.insertH(tweet)
    }
  }
  let n = 0
  while (!q.empty() && n < 10) {
    let t = q.delMax()
    res.push(t.id)
    n ++ 
    if (t.next) {
      q.insertH(t.next)
    }
  }
  return res
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  
  if (!this.userMap[followerId]) {
    let user = new User(followerId)
    this.userMap[followerId] = user
  }
  if (!this.userMap[followeeId]) {
    let user = new User(followeeId)
    this.userMap[followeeId] = user
  }

  this.userMap[followerId].follow(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (!this.userMap[followerId] || followerId === followeeId) return
  this.userMap[followerId].unfollow(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */