
export function observer(userInfo, viewDom) {
  var _storageInfo = JSON.parse(localStorage.getItem('userInfo')) || userInfo
  var _returnInfo = {}
  function init () {
    initData(_storageInfo, _returnInfo, userInfo)
    initTemp(viewDom)
  }
  function initData (storageInfo, returnInfo, userInfo) {
    for (var key in storageInfo) {
      if (!userInfo[key]) {
        userInfo[key] = storageInfo[key]
      }
    }
    for (var key in userInfo) {
      ((key) => {
        Object.defineProperty(returnInfo, key, {
          get: function () {
            return userInfo[key]
          },
          set: function (val) {
            userInfo[key] = val
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            viewDom.querySelector(`.__${key}`).innerHTML = val
          }
        })
      })(key)
    }
  }

  function initTemp(viewDom) {
    viewDom.innerHTML = `
      <div class='__username'>${_returnInfo.username || '未输入 '}<div>
      <div class='__password'>${_returnInfo.password || '未输入 '}<div>
    `
  }
  init()
  return _returnInfo
}