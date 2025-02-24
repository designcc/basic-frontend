function arrGenerator(arr) {
  var _index = 0;
  return {
    next: function() {
      return _index < arr.length ? { value: arr[_index++], done: false } : { value: undefined, done: true };
    }
  }
}

function classArrayGenerator(obj) {
  var _index = 0
  var _this = this
  return {
    next: function() {
      return _index < _this.length ? { value: obj[_index++], done: false } : { value: undefined, done: true };
    }
  }
}