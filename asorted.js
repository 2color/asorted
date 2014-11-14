if (typeof module === "object" && typeof module.exports === "object") module.exports = Asorted;


function Asorted() {
  this.array = [];
  var index = 0;
  var length = arguments.length;
  while (index < length) this.insert(arguments[index++]);
}

Asorted.prototype.insert = function (value) {
    var array = this.array;
    var index = this._sortedIndex(value);
    array.splice(index, 0, value);

    return this;
};

Asorted.prototype.remove = function (value) {
    var index = this.search(value);
    if (index >= 0) this.array.splice(index, 1);
    return this;
};


Asorted.prototype._sortedIndex = function(value) {
  var array = this.array;
  var low = 0;
  var high = array.length;

  while (low < high) {
    var mid = low + high >>> 1;
    if (array[mid] < value) low = mid + 1;
    else high = mid;
  }

  return low;
};

Asorted.prototype.search = function (value) {
  var low = 0;
  var array = this.array;
  var high = array.length;

  while (high > low) {
      var index = high + low >>> 1;
      var cursor = array[index];

      if (cursor < value) low = index + 1;
      else if (cursor > value) high = index;
      else return index;
  }

  return -1;
};
