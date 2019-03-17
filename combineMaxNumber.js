// 题目描述
// 设有n个正整数，将他们连接成一排，组成一个最大的多位整数。
// 如:n=3时，3个整数13,312,343,连成的最大整数为34331213。
// 如:n=4时,4个整数7,13,4,246连接成的最大整数为7424613。


function getInput(input) {
  let lines = input.split('\n')
  return lines.reduce(
    (res, next, i) => res.concat(i % 2 === 1 ? next.split(' ') : next), [])
}

function maxKey(obj) {
  let keys = Object.keys(obj).filter(
    key => key !== 'count'
  ).map(key => Number(key))
  if (keys.length > 0) {
    let max = Math.max(...keys)
    obj[max].count--
    return max
  } else {
    return null
  }
}

function destruct(obj, sorted, i) {
  sorted = sorted || []
  let keys = Object.keys(obj)
  let i = sorted.length
  let keyPath = []
  let max = maxKey(obj)
  if (max !== null) {
    keyPath.push(max)
    let next = obj
  } else {
    return sorted.join('')
  }
}

function combine(numbers) {
  let dict = {
    count: 0
  }
  for (let i = 0, len = numbers.length; i < len; i++) {
    let numSplit = numbers[i].split('')
    dict.count++
      numSplit.reduce((prev, cur) => (
        prev[cur] ? Object.assign(
          prev[cur], {
            count: prev[cur].count + 1
          }
        ) : (prev[cur] = {
          count: 1
        })), dict)
  }
  return destruct(dict)
}

function main(input) {
  input = getInput(input)
  let result = []
  while (input.length) {
    let n = input.shift()
    let numbers = input.splice(0, Number(n))
    result.push(combine(numbers))
  }
  return result.join('\n')
}