import { ITodo } from "."

class TodoDom {
  private static instance: TodoDom
  private oTodolist: HTMLElement = document.querySelector('.todo-list')!
  public static create() {
    if(!TodoDom.instance) {
      TodoDom.instance = new TodoDom()
    }
    return TodoDom.instance
  }
  public addItem(todo: ITodo) {
    return new Promise((resolve, reject) => {
      const oItem:HTMLElement = document.createElement('div')
      oItem.className = 'todo-item'
      oItem.innerHTML = this.todoView(todo)
      this.oTodolist.appendChild(oItem)
      resolve(todo)
    })
  }
  public removeItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItem: HTMLCollection = document.getElementsByClassName('todo-item')
      Array.from(oItem).forEach((item) => {
        const _id = parseInt(item.querySelector('button')?.dataset.id!)
        if(_id === id) {
          item.remove()
          resolve()
        }
      })
    })
  }
  public toggleItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItems: HTMLCollection = document.getElementsByClassName('todo-item')
      Array.from(oItems).forEach(item => {
        const oCheckbox: HTMLInputElement = item.querySelector('input')!
        const _id = parseInt(oCheckbox?.dataset.id!)
        if (_id === id) {
          const oContent: HTMLElement = item.querySelector('span')!
          oContent.style.textDecoration = oCheckbox.checked ? 'line-through' : 'none'
          resolve()
        }
      })
    })
  }
  private todoView({id, content, completed}: ITodo): string {
    return `
      <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
      <span style="text-decoration: ${completed ? 'line-through' : 'none'}">${content}</span>
      <button data-id="${id}">delete</button>
    `
  }

}

export default TodoDom;