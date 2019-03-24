/**
 * 判断给定的链表是否为回文结构
 * 要求对于长度为N的链表，时间复杂度为O(N)，空间复杂度为O(1)
 */

let MakeLinkList = require('./MakeLinkList')

function isPalindromeLinkList(array) {
  let head = MakeLinkList(array);
  if (head === null) return [false, head]
  if (head.next === null) return [true, head]
  let cursor = mid = head

  // 快速找到链表的中间节点
  while ((cursor.next !== null) && (cursor.next.next !== null)) {
    mid = mid.next
    cursor = cursor.next.next
  }

  // 将右半部分节点指向反转
  let prev = mid, next
  cursor = prev.next
  while (cursor !== null) {
    next = cursor.next
    cursor.next = prev
    prev = cursor
    cursor = next
  }
  mid.next = null

  // 判断是否为回文结构
  let right_cursor = prev // 为最右边的节点
  let left_cursor = head
  let isPalindrome = true
  while (
    (left_cursor !== null) &&
    (right_cursor !== null)
  ) {
    if (left_cursor.value !== right_cursor.value) {
      isPalindrome = false
      break
    }
    left_cursor = left_cursor.next
    right_cursor = right_cursor.next
  }

  // 将链表右半部分的节点的指向还原
  cursor = prev.next
  while (cursor !== null) {
    next = cursor.next
    cursor.next = prev
    prev = cursor
    cursor = next
  }

  return [isPalindrome, head]
}

module.exports = isPalindromeLinkList;