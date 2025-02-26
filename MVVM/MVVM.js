class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el);
    this._data = data;
    this.domPool = {}
    this.init();
  }

  init() {
    this.initData()
    this.bindEvent()
    this.bindDom(this.el)
  }

  initData() {
    const _this = this;
    this.data = {}
    for (let key in _this._data) {
      Object.defineProperty(this.data, key, {
        get() {
          return _this._data[key];
        },
        set(newVal) {
          _this.domPool[key].innerText = newVal;
          _this._data[key] = newVal;
        }
      })
    }
  }

  bindDom(el) {
    const childNodes = el.childNodes

    childNodes.forEach(node => {
      if (node.nodeType === 3) {
        const nodeValue = node.nodeValue

        if (nodeValue.trim().length) {
          let _isValid = /\{\{(.+?)\}\}/.test(nodeValue)
          if (_isValid) {
            const key = nodeValue.match(/\{\{(.+?)\}\}/)[1].trim()
            this.domPool[key] = node.parentNode
            node.parentNode.innerText = this.data[key] || ''
          }
        }
      }
      node.childNodes && this.bindDom(node)
    })

  }

  bindEvent() {
    const _allInput = this.el.querySelectorAll('input');
    _allInput.forEach(input => {
      input.addEventListener('input', e => {
        const _attr = input.getAttribute('v-model');
        this.data[_attr] = e.target.value || '';
      })
    })
  }

  setData(key, value) {
    this.data[key] = value;
  }
}