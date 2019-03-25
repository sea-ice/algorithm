// 最大和的子数组
// 分治的思想（分解、求解子问题、合并）

// 给定一个数组，从中找出连续元素构成最大和的子数组

function maxSubArraySum(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let midIndex = Math.floor((start + end) / 2)
    let leftPartMaxSum = maxSubArraySum(arr, start, midIndex)
    let rightPartMaxSum = maxSubArraySum(arr, midIndex + 1, end);
    // 当考虑跨越中间节点时，需要保证左右两边都有节点被包含进来
    let spanCenterMaxSum = arr[midIndex] + arr[midIndex + 1]
    for (let ld = 0, ldMax = midIndex - start; ld <= ldMax; ld++) {
      for (let rd = 0, rdMax = end - midIndex - 1; rd <= rdMax; rd++) {
        spanCenterMaxSum = Math.max(spanCenterMaxSum,
          subArraySum(arr, midIndex - ld, midIndex + 1 + rd))
      }
    }
    return Math.max(leftPartMaxSum, rightPartMaxSum, spanCenterMaxSum)
  } else if (start === end) {
    return arr[start]
  }
}

function subArraySum(array, i, j) {
  return array.slice(i, j + 1).reduce((cur, next) => cur + next, 0)
}

console.log(maxSubArraySum([1, -2, 3, 10, -4, 7, 2, -5])) // 18
