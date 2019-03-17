const findAllPrimesWithinNumber = require('../findAllPrimesWithinNumber')

describe('find all primes within number', () => {
  test('all primes within 1: []', () => {
    expect(findAllPrimesWithinNumber(1)).toEqual([])
  })

  test('all primes within 5: [2, 3, 5]', () => {
    expect(findAllPrimesWithinNumber(5)).toEqual([2, 3, 5])
  })

  test('all primes within 10: [2, 3, 5, 7]', () => {
    expect(findAllPrimesWithinNumber(10)).toEqual([2, 3, 5, 7])
  })

  test('all primes within 31: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]', () => {
    expect(findAllPrimesWithinNumber(31)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])
  })
})