// 立即执行函数  IIFE(Immediately Invoked Function Expression) 立即 调用 函数 表达式

/**
 * 1. 可以创建独立作用域
 * 2. 执行完成后立即销毁
 * 3. ES5 之前的模块化方案
 * 4. 可以抛出一些属性或方法
 * 5. 可以在window上挂着属性和方法
*/


;(function(doc, tpl, tools) {
  function MyTab(el,) {
    this.el = doc.querySelector(el)
    this.data = JSON.parse(this.el.getAttribute('data'))
    this._index = 0
    this.init()
  }

  MyTab.prototype.init = function() {
    this._render()
    this._bindEvent()
  }

  MyTab.prototype._render = function() {
    var tabWrapper = doc.createElement('div')
    var pageWrapper = doc.createElement('div')
    var oFrag = doc.createDocumentFragment()
    tabWrapper.className = 'tab-wrapper'
    pageWrapper.className = 'page-wrapper'
    this.data.forEach(function(item, index) {
      tabWrapper.innerHTML += tools.tplReplace(tpl.tab('tital'), {
        tital: item.title,
        current: !index ? 'current' : ''
      });

      pageWrapper.innerHTML += tools.tplReplace(tpl.tab('content'), {
        content: item.content,
        current: !index ? 'current' : ''
      });
    })
    oFrag.appendChild(tabWrapper)
    oFrag.appendChild(pageWrapper)
    this.el.appendChild(oFrag)
  }

  MyTab.prototype._bindEvent = function() {
    var doms = {
      oTabItems: doc.querySelectorAll('.tab-item'),
      oPageItems: doc.querySelectorAll('.page-item')
    }
    this.el.addEventListener('click', this._handelTabClick.bind(this, doms), false)
  }

  MyTab.prototype._handelTabClick = function() {
    var _doms = arguments[0]
    var tar = arguments[1].target
    var className = tar.className.trim()
    console.log(tar, className);
    if (className === 'tab-item') {
      _doms.oTabItems[this._index].className = 'tab-item'
      _doms.oPageItems[this._index].className = 'page-item'
      this._index = [].indexOf.call(_doms.oTabItems, tar)
      tar.className = 'tab-item current'
      _doms.oPageItems[this._index].className = 'page-item current'
    }
  }

  window.MyTab = MyTab
})(document, tpl, tools)