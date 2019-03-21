const sortStack = require('../../Stack&Queue/sortStack')

describe('sort a stack', () => {
  test('sort []', () => {
    expect(sortStack([])).toEqual([])
  })

  test('sort [2, 3, 2]', () => {
    expect(sortStack([2, 3, 2])).toEqual([3, 2, 2])
  })

  test('sort [1, 2, 3, 3]', () => {
    expect(sortStack([1, 2, 3, 3])).toEqual([3, 3, 2, 1])
  })

  test('sort [2, 4, 2, 3, 5, 8, 1]', () => {
    expect(sortStack([2, 4, 2, 3, 5, 8, 1])).toEqual([8, 5, 4, 3, 2, 2, 1])
  })
})