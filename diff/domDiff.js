let patches = {}

function domDiff(oldDom, newDom) {
  let index = 0
  vNodeWalk(oldDom, newDom, index)
  return patches
}

function vNodeWalk(oldNode, newNode, index) {
  const vnPatch = []
  if (!newNode) {
    vnPatch.push({ type: 'REMOVE', index })
  } else if (typeof oldNode === 'string' && typeof newNode === 'string') {
    if (oldNode !== newNode) {
      vnPatch.push({ type: 'TEXT', text: newNode })
    }
  } else if (oldNode.tagName === newNode.tagName) {
    const attrPatch = diffProps(oldNode.props, newNode.props)
    if (attrPatch.length) {
      vnPatch.push({ type: 'ATTRS', attrs: attrPatch })
    }
    diffChildren(oldNode.children, newNode.children, index)
  } else {
    vnPatch.push({ type: 'REPLACE', node: newNode })
  }
  if(vNodeWalk.length > 0) {
    patches[index] = vnPatch
  }
}

function diffProps(oldProps, newProps) {
  const patch = []
  for (let key in oldProps) {
    if (oldProps[key] !== newProps[key]) {
      patch.push({ key, value: newProps[key] })
    }
  }
  for (let key in newProps) {
    if (!oldProps.hasOwnProperty(key)) {
      patch.push({ key, value: newProps[key] })
    }
  }
  return patch
}

function diffChildren(oldChildren, newChildren, index) {
  oldChildren.forEach((child, i) => {
    vNodeWalk(child, newChildren[i], ++index)
  })
}

export default domDiff