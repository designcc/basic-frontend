function deepClone(origin, target) {
  var target = target || {}
  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      if (typeof origin[key] === 'object' && origin[key] !== null) {
        if (Object.prototype.toString.call(origin[key]) === '[object Array]') {
          target[key] = [];
        } else {
          target[key] = {};
        }
        deepClone(origin[key], target[key]);
      } else {
        target[key] = origin[key];
      }
    }
  }
  return target;
}

const arr = []
const newArr = arr.constructor()
newArr.push(1)
console.log(arr, '---', newArr);


function Test () {
  this.name = 'test'
}

const test1 = new Test()
const test2 = new Test()
test1.b = 'b'
console.log(test1, '---', test2);


