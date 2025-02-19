import { createElement, render, renderDom } from "./virtualDom.js"
const vDom = createElement(
  "div",
  { id: "container" },
  createElement("h1", { style: "color: blue" }, "simple virtual dom"),
  createElement("p", { style: "color: red" }, "Hello, virtual-dom"),
  createElement(
    "ul",
    null,
    createElement("li", null, "li 1"),
    createElement("li", null, "li 2")
  )
)

const rDom = render(vDom)
renderDom(rDom, document.querySelector("#app"))
