// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 基本思路：从左下角开始，如果当前元素值比目标值大，则取正上方的元素继续下一轮比较；
// 如果比目标值小，则取右边的元素继续下一轮比较；直到找到对应的元素或者索引值超出数组范围

function Find(target, array) {
  let rows = array.length
  if (!rows) return false
  let columns = array[0].length
  if (!columns) return false
  let i = rows - 1
  let j = 0
  while (i >= 0 && j < columns) {
    let currentVal = array[i][j]
    if (currentVal > target) { i-- }
    else if (currentVal < target) { j++ }
    else { return true }
  }
  return false
}

module.exports = Find