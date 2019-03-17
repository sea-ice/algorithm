const Find = require('../findNumberInTwo-DArray')

describe('find number in 2-D array', () => {
  test('输入为空数组', () => {
    expect(Find(0, [])).toBe(false)
  })

  test('test sample 1: [ [1, 3, 4] ]', () => {
    const arr = [
      [1, 3, 4]
    ]
    expect(Find(2, arr)).toBe(false)
    expect(Find(4, arr)).toBe(true)
  })
})