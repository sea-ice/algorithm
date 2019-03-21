const reversedStack = require('../../Stack&Queue/reversedStack')

describe('reverse a stack', () => {
  test('reverse []', () => {
    expect(reversedStack([])).toEqual([])
  })

  test('reverse [2, 3, 2]', () => {
    expect(reversedStack([2, 3, 2])).toEqual([2, 3, 2])
  })

  test('reverse [1, 2, 3, 3]', () => {
    expect(reversedStack([1, 2, 3, 3])).toEqual([3, 3, 2, 1])
  })

  test('reverse [2, 4, 2, 3, 5, 8, 1]', () => {
    expect(reversedStack([2, 4, 2, 3, 5, 8, 1])).toEqual([1, 8, 5, 3, 2, 4, 2])
  })
})