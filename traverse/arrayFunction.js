function myForEach(cb) {
  var _arr = this;
  var _len = _arr.length;
  var _self = arguments[1] || window
  for (var i = 0; i < _len; i++) {
    cb.call(_self, _arr[i], i, _arr);
  }
}


function myMap(cb) {
  var _arr = this
  var _len = _arr.length
  var _self = arguments[1] || window
  var _reslut = []
  var _temp;
  for (var i = 0; i < _len; i++) {
    _temp = cb.call(_self, _arr[i], i, _arr)
    if (_temp) {
      _reslut.push(_temp)
    }
  }
}
