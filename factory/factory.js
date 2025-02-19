import ModelType from "./type.js"
class Model {
  constructor(status) {
    this.status = status
  }
  get className() {
    let className = ''
    switch (this.status) {
      case 'S':
        className = 'oModel success'
      break
      case 'E':
        className = 'oModel error'
      break
      case 'P':
        className = 'oModel primary'
      break
      default:
        break;
    }
    return className
  }
}

class SuccessModel extends Model {
  constructor(title) {
    super(ModelType.SUCCESS)
    this.title = title
  }
}

class ErrorModel extends Model {
  constructor(title) {
    super(ModelType.ERROR)
    this.title = title
  }
}

class PrimaryModel extends Model {
  constructor(title) {
    super(ModelType.PRIMARY)
    this.title = title
  }
}

class ModelFactory {
  constructor(dom) {
    this.dom = dom
  }
  create(title, status) {
    const dom = this.dom
    let model = null
    switch (status) {
      case ModelType.SUCCESS:
        model = new SuccessModel(title)
      break
      case ModelType.ERROR:
        model = new ErrorModel(title)
      break
      case ModelType.PRIMARY:
        model = new PrimaryModel(title)
      break
      default:
        break;
    }
    dom.className = model.className
    dom.innerHTML = model.title
  }
}

export default ModelFactory