/**
 * 打印两个有序链表的公共部分
 */

let MakeLinkList = require('./MakeLinkList')

function commonPartBetweenTwoLinkList(array_1, array_2) {
  let head_1 = MakeLinkList(array_1)
  let head_2 = MakeLinkList(array_2)

  let commonParts = []
  let cursor_1 = head_1, cursor_2 = head_2
  while (cursor_1 && cursor_2) {
    if (cursor_1.value === cursor_2.value) {
      commonParts.push(cursor_1.value)
      cursor_1 = cursor_1.next
      cursor_2 = cursor_2.next
    } else if (cursor_1.value > cursor_2.value) {
      cursor_2 = cursor_2.next
    } else {
      cursor_1 = cursor_1.next
    }
  }

  return commonParts
}

module.exports = commonPartBetweenTwoLinkList