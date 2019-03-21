/**
 * 只使用一个栈完成对另一个栈中的元素的排序
 * 注意helpStack元素在全部弹出之后的处理
 */

function sortStack(stack) {
  let helpStack = []

  if (stack.length) {
    helpStack.push(stack.pop())

    while (stack.length) {
      let current = stack.pop()
      let helpStackEle, originStackLength // 保存在弹出helpStack栈顶元素之前栈的长度
      while (
        (originStackLength = helpStack.length) && // 如果helpStack为空，说明current值为已压入helpStack的元素最大值
        ((helpStackEle = helpStack.pop()) < current)) {
        stack.push(helpStackEle)
      }
      // 找到helpStack中大于等于current的元素，由于此时该元素已从栈中弹出，
      // 因此需要先将该元素重新压回栈中，然后再压入当前比较的元素
      if (originStackLength) helpStack.push(helpStackEle)
      helpStack.push(current)
    }
  }

  return helpStack
}

module.exports = sortStack