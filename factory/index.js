import ModelFactory from './factory.js';

;(() => {
  const oModel = document.getElementsByClassName('oModel')[0]
  const oBtnGroup = document.getElementsByClassName('btn-group')[0]
  const modelFactory = new ModelFactory(oModel)

  const init = () => {
    bindEvent()
  }
  function bindEvent() {
    oBtnGroup.addEventListener('click', handleBtnClick, false)
  }

  const handleBtnClick = (e) => {
    const tar = e.target
    const tagName = tar.tagName.toLowerCase()
    if (tagName === 'button') {
      const status = tar.dataset.status
      // changeStatus(status)
      modelFactory.create('这是一个test', status)
    }
  }
  // function changeStatus(status) {
  //   switch (status) {
  //     case 'S':
  //       oModel.className = 'oModel success'
  //     break
  //     case 'E':
  //       oModel.className = 'oModel error'
  //     break
  //     case 'P':
  //       oModel.className = 'oModel primary'
  //     break
  //     default:
  //       break;
  //   }
  // }
  init()
})()