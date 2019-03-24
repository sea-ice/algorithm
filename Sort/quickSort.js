function quickSort(array = [], start = 0, end = array.length - 1) {
  if (!array.length) return array

  if (start < end) {
    let mid = partition(array, start, end);
    quickSort(array, start, mid - 1);
    quickSort(array, mid + 1, end);
  }

  return array
}

function partition(array, start, end) {
  if (start >= end) return
  let target = array[end]
  let cursor = start
  let greaterStart;
  while (cursor < end) {
    if (array[cursor] <= target) {
      if (greaterStart !== undefined) {
        let temp = array[greaterStart]
        array[greaterStart] = array[cursor]
        array[cursor] = temp
        greaterStart++
      }
    } else {
      if (greaterStart === undefined) {
        greaterStart = cursor;
      }
    }
    cursor++
  }
  if (greaterStart !== undefined) {
    array[end] = array[greaterStart]
    array[greaterStart] = target
    return greaterStart
  }
  return end
}

module.exports = quickSort