Function.prototype.before = function (beforefn) {
  var __self = this;
  return function() {
    var res = beforefn.apply(__self, arguments);
    return __self.call(__self, res);
  }
}

Function.prototype.after = function (afterfn) {
  var __self = this;
  return function() {
    var res = __self.apply(__self, arguments);
    afterfn.call(__self, res);
    return res
  }
}