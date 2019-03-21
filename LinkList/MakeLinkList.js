function MakeLinkList(array, isTwoWay = false) {
  let head = null

  if (array.length) {
    let prev
    for (let i = 0, len = array.length; i < len; i++) {
      let current = new LinkNode(array[i])
      if (i === 0) {
        head = current
      } else {
        prev.next = current
        if (isTwoWay) current.prev = prev
        if (i === len - 1) current.next = null
      }
      prev = current
    }
  }
  return head
}

function LinkNode(value, next, prev) {
  this.value = value
  if (next) this.next = next;
  if (prev) this.prev = prev
}

module.exports = MakeLinkList