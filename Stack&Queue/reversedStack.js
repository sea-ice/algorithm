/**
 * 逆序一个栈
 * js中用数组来模拟一个栈，只能调用数组的push和pop方法。
 * 只能用递归实现，不能借助额外的数据结构
 */

/**
 * 获取并移除栈底元素
 */
function getAndRemoveStackBottom(stack) {
  if (stack.length === 1) {
    return stack.pop()
  } else {
    let stackTop = stack.pop()
    let bottom = getAndRemoveStackBottom(stack)
    stack.push(stackTop)
    return bottom
  }
}

function reversedStack(stack) {
  if (!stack.length) return stack
  let bottom = getAndRemoveStackBottom(stack)
  if (stack.length > 1) {
    reversedStack(stack)
  }
  stack.push(bottom)
  return stack
}

// console.log(reversedStack([]))
module.exports = reversedStack