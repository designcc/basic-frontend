import Element from './Element.js';

function createElement(tagName, props, ...children) {
  return new Element(tagName, props, children);
}

function setAttrs(el, key, value) {
  switch(key) {
    case 'value':
      if (el.tagName.toUpperCase() === 'INPUT' || el.tagName.toUpperCase() === 'TEXTAREA') {
        el.value = value;
      } else {
        el.setAttribute(key, value);
      }
      break;
    case 'style':
      el.style.cssText = value;
      break;
    default:
      el.setAttribute(key, value);
      break;
  }
}

function render(vDom) {
  const { tagName, props, children } = vDom;
  const el = document.createElement(tagName);
  for (let key in props) {
    setAttrs(el, key, props[key]);
  }
  children.forEach(child => {
    child = child instanceof Element ? render(child) : document.createTextNode(child);
    el.appendChild(child);
  });
  return el;
}

function renderDom(el, target) {
  target.appendChild(el);
}

export {
  createElement,
  render,
  setAttrs,
  renderDom
}