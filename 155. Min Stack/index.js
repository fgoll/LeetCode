/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this._elem = []
  this._min = Number.MAX_VALUE
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  
  if (x <= this._min) {
    this._elem.push(this._min)
    this._min = x
  }
  this._elem.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let x = this._elem.pop()
  if (x === this._min) {
    this._min = this._elem.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._elem[this._elem.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */