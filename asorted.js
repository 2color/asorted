if (typeof module === "object" && typeof module.exports === "object") module.exports = Asorted;

/**
 * Asorted Constructor
 *
 * @param   options   object
 * options:
 *          sortBy    string    the key by which to sort objects
 *
 * Example
 * asorted = new Asorted({ sortBy: 'size'}, { name: 'Danny', size: 10 }, { name: 'Linus', size: 9 } );
 * asorted = new Asorted(4, 42, 8, 16, 15, 23);
 *
 */
function Asorted() {
  this.array = [];
  this.sortBy = (arguments[0] && arguments[0].sortBy) ? arguments[0].sortBy : false;
  var index = this.sortBy ? 1 : 0;
  var length = arguments.length;
  while (index < length) {
    this.insert(arguments[index]);
    index++;
  }
}

/**
 * Insert
 *
 * @param   element   mixed(object or primitive type)
 *
 * @return  integer   the index of the added element
 */
Asorted.prototype.insert = function (element) {
    var array = this.array;
    var index = this._sortedIndex(element);
    array.splice(index, 0, element);

    return index;
};

Asorted.prototype.remove = function (element) {
    var index = this.search(element);
    if (index >= 0) this.array.splice(index, 1);
    return this;
};


Asorted.prototype._sortedIndex = function(element) {
  var array = this.array;
  var sortBy = this.sortBy;
  var low = 0;
  var high = array.length;

  if (sortBy && (typeof element !== 'object' || !element[sortBy])) {
      console.error('An object with the %s key is required', sortBy);
  }

  while (low < high) {
    var mid = low + high >>> 1;
    var cursor = sortBy ? array[mid][sortBy] : array[mid];
    var el = sortBy ? element[sortBy] : element;

    if (cursor < el) low = mid + 1;
    else high = mid;
  }

  return low;
};

/**
 * Search for an element in the array
 *
 * For object arrays `element` is an object and a greater than is used only
 * against the sortBy key.
 * For normal arrays, the greater than operator is used against the elements
 *
 * @param element mixed
 *
 * @return integer the index of the found element or -1 if not found
 */
Asorted.prototype.search = function (element) {
  var array = this.array;
  var sortBy = this.sortBy;
  var low = 0;
  var high = array.length;

  while (low < high) {
      var index = high + low >>> 1;
      var cursor = sortBy ? array[index][sortBy] : array[index];
      var el = sortBy ? element[sortBy] : element;

      if (cursor < el) low = index + 1;
      else if (cursor > el) high = index;
      else return index;
  }

  return -1;
};
