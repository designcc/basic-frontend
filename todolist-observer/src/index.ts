import TodoList from './todoList/index'
;((document) => {
  const oInput: HTMLInputElement = document.querySelector('#todo-inp')!
  const oBut: HTMLButtonElement = document.querySelector('.todo-btn')!
  const oTodoList: Element = document.querySelector('.todo-list')!
  const todoIns: TodoList = TodoList.create(oTodoList)
  const init = () => {
    bindEvent()
  }
  const bindEvent = () => {
    oBut?.addEventListener('click', handleAddBtnClick, false)
    oTodoList?.addEventListener('click', handleListClick, false)
  }
  const handleAddBtnClick = (e) => {
    const val = oInput?.value?.trim()
    if(!val.length) {
      return
    }
    todoIns.notify('add', {
      id: new Date().getTime(),
      content: val,
      completed: false
    })
    oInput.value = ''
  }

  const handleListClick = (e:Event) => {
    const tar = e.target as HTMLElement
    const tagName = tar.tagName.toLowerCase()
    if(tagName === 'input' || tagName === 'button') {
      const id: number = parseInt(tar.dataset.id!)
      switch(tagName) {
        case 'input':
          todoIns.notify('toggle', id)
          break;
        case 'button':
          todoIns.notify('remove', id)
          break;
        default:
          break;
      }
    }
  }
  init()
})(document)