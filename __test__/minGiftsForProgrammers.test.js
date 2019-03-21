const minGiftsForProgrammers = require('../minGiftsForProgrammers')

describe('min gifts for programmers:', () => {
  test('scores: [2, 3]', () => {
    expect(minGiftsForProgrammers(2, [2, 3])).toEqual(3)
  })

  test('scores: [2, 3, 2]', () => {
    expect(minGiftsForProgrammers(3, [2, 3, 2])).toEqual(4)
  })

  test('scores: [1, 2, 3, 3]', () => {
    expect(minGiftsForProgrammers(4, [1, 2, 3, 3])).toEqual(8)
  })

  test('scores: [2, 4, 2, 3, 5, 8, 1]', () => {
    expect(minGiftsForProgrammers(7, [2, 4, 2, 3, 5, 8, 1])).toEqual(16)
  })
})