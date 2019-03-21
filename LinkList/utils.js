function getLinkListNodes(head) {
  let nodes = []
  while (head) {
    nodes.push(head.value)
    head = head.next
  }

  return nodes
}

module.exports = {
  getLinkListNodes
}