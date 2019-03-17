// 最大和的子数组
// 分治的思想（分解、求解子问题、合并）

// 给定一个数组，从中找出连续元素构成最大和的子数组

function maxSubArraySum(arr, start, stop) {
  if (stop > start) {
    let middle = Math.floor((stop + start) / 2)
    let leftPartMaxSubArr = maxSubArraySum(arr, start, middle)
    let rightPartMaxSubArr = maxSubArraySum(arr, middle + 1, stop)
  }
  return 
}

