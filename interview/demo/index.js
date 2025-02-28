import {observer} from './observer.js';
;(() => {
  var oBtn = document.getElementById('submit')
  var oUsername = document.getElementById('username')
  var oPassword = document.getElementById('password')
  var oTemp = document.getElementById('app')
  var userInfo = observer({
    username: '',
    password: ''
  }, oTemp)

  function init() {
    bindEvent()
  }

  function bindEvent() {
    oBtn.addEventListener('click', handleLogin, false)
  }

  function handleLogin() {
    var _username = oUsername.value.trim()
    var _password = oPassword.value.trim()
    _username && (_username !== userInfo.username) && (userInfo.username = _username)
    _password && (_password !== userInfo.password) && (userInfo.password = _password)
    oUsername.value = ''
    oPassword.value = ''
  }
  init()
})()