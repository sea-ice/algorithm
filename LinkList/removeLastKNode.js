/**
 * 移除单向链表和双向链表中倒数第k个节点
 */
let MakeLinkList = require('./MakeLinkList')

function removeLastKNodeInOneWayList(array, k) {
  if (!array.length) return null

  let head = MakeLinkList(array)
  if (k > 0) {
    let cursor = head;
    while (cursor) {
      k--;
      cursor = cursor.next;
    } // 经过一个节点，k值减一

    if (k === 0) {
      // 刚好为0，则表示需要移除头节点
      let second = head.next
      head.next = null
      return second;
    }
    if (k < 0) {
      cursor = head;
      while (cursor) {
        if (++k === 0) {
          let removeNode = cursor.next;
          cursor.next = removeNode.next;
          break;
        }
        cursor = cursor.next;
      }
    }
  }

  return head
}

function removeLastKNodeInTwoWayList(array, k) {

}

module.exports = {
  removeLastKNodeInOneWayList,
  removeLastKNodeInTwoWayList
}