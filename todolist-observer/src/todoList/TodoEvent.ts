import { ITodo } from "."

class TodoEvent {
  private static instance: TodoEvent
  private todoData: ITodo[] = []
  public static create() {
    if(!TodoEvent.instance) {
      TodoEvent.instance = new TodoEvent()
    }
    return TodoEvent.instance
  }
  public addTodo(todo: ITodo): Promise<ITodo> {
    return new Promise((resolve, reject) => {
      const _todo: ITodo | undefined = this.todoData.find((item) => item.content === todo.content)
      if(_todo) {
        alert('Todo already exists')
        return reject('Todo already exists')
      }
      this.todoData.push(todo)
      resolve(todo)
    })
  }
  public removeTodo(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.todoData = this.todoData.filter((item) => item.id !== id)
      resolve(id)
    })
  }
  public toggleTodo(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.todoData = this.todoData.map((item) => {
        if(item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      resolve(id)
    })
  }
}

export default TodoEvent;