let finalPatches = {}
let index = 0
function doPatch(rDom, patches) {
  finalPatches = patches
  patchWalk(rDom)
}


function patchWalk(rDom) {
  const rnPatch = finalPatches[index++]
  const childNodes = rDom.children || [] // 修改为children
  childNodes.forEach(child => {
    patchWalk(child)
  })
  if (rnPatch) {
    applyPatch(rDom, rnPatch)
  }
}

function applyPatch(node, patches) {
  patches.forEach(patch => {
    switch (patch.type) {

      case 'TEXT':
        node.textContent = patch.text
        break
      case 'ATTRS':
        for (let attr of patch.attrs) {
          const { key, value } = attr
          if (value) {
            node.setAttribute(key, value)
          } else {
            node.removeAttribute(key)
          }
        }
        break
      case 'REPLACE':
        const newNode = patch.node instanceof Element ? render(patch.node) : document.createTextNode(patch.node)
        node.parentNode.replaceChild(newNode, node)
        break
      case 'REMOVE':
        node.parentNode.removeChild(node)
        break
      default:
        break
    }
  })
}

export default doPatch
