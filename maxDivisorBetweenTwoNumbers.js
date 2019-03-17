// 欧几里得算法求取两个数的最大公约数
// 两个数的最大公约数等价于两数之差代替其中较大的一个数与另一个数的最大公约数

function maxDivisorBetweenTwoNumbers(n1, n2) {
  if (n1 % 1 !== 0 || n2 % 1 !== 0) return 0
  if (n1 === 0 || n2 === 0) return 0
  n1 = Math.abs(n1)
  n2 = Math.abs(n2)

  let tmp = n1
  n1 = Math.max(n1, n2)
  n2 = Math.min(tmp, n2)
  while (n1 !== n2) {
    let diff = n1 - n2
    n1 = Math.max(diff, n2)
    n2 = Math.min(diff, n2)
  }
  return n1
}

module.exports = maxDivisorBetweenTwoNumbers