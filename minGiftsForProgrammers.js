/**
 * 题目：给参与比赛的队员发奖品，所有人构成一个环，根据每个人的得分来发，要求每个人最终获得
 * 的奖品比在他左边或者右边得分低的人要多，而且每个人最终至少获得一个奖品。
 * 问：对于给定n个人以及他们每个人的得分，最少需要准备多少奖品？
 */

function getAdjacentIndex(scores, i) {
  let lastIndex = scores.length - 1
  return i === 0 ? [lastIndex, 1] : i === lastIndex ? [i - 1, 0] : [i - 1, i + 1]
}

function calculateMemberGifts(nodes, startIndex) {
  let target = nodes[startIndex]
  let [li, ri] = getAdjacentIndex(nodes, startIndex)

  if (!target.gift) {
    if (target.left) {
      target.gift = calculateMemberGifts(nodes, li)
      target.left = false
    } else {
      target.gift = calculateMemberGifts(nodes, ri)
      target.right = false
    }
  }

  return target.gift + 1
}

/**
 * 共分为9种情况，其中：
 * 1. 小于左边，小于右边：只需要发1个礼物
 * 2. 小于左边，等于右边：只需要发1个礼物
 * 3. 小于左边，大于右边：右边的礼物+1
 * 4. 等于左边，小于右边：只需要发1个礼物
 * 5. 等于左边，等于右边：只需要发1个礼物
 * 6. 等于左边，大于右边：右边的礼物+1
 * 7. 大于左边，小于右边：左边的礼物+1
 * 8. 大于左边，等于右边：左边的礼物+1
 * 9. 大于左边，大于右边：左右两边的礼物最大值+1
 * @param {*} n
 * @param {*} scores
 */

function minGiftsForProgrammers(n, scores) {
  if (n === 1) return 1
  if (n === 2) return scores[0] === scores[1] ? 2 : 3
  let nodes = scores.map((score, i) => {
    let [li, ri] = getAdjacentIndex(scores, i)
    let current = scores[i]
    if (current <= scores[li] && current <= scores[ri]) {
      return { gift: 1 }
    } else {
      return { left: current > scores[li], right: current > scores[ri] }
    }
  })
  let startIndex // 处理3、6、7、8这三种情况
  while ((startIndex = nodes.findIndex(
    node => !node.gift && !(node.left && node.right))) !== -1
  ) {
    calculateMemberGifts(nodes, startIndex)
  }

  let gifts = nodes.map((node, i) => {
    if (node.left && node.right) {
      // 处理第9种情况
      let [ls, rs] = getAdjacentIndex(nodes, i).map(i => nodes[i].gift)
      return Math.max(ls, rs) + 1
    }
    return node.gift
  })
  return gifts.reduce((a, b) => a + b)
}

module.exports = minGiftsForProgrammers
