const maxDivisorBetweenTwoNumbers = require('../maxDivisorBetweenTwoNumbers')

describe('find max divisor between two numbers', () => {
  test('max divisor between 12 and 12: 12', () => {
    expect(maxDivisorBetweenTwoNumbers(12, 12)).toEqual(12)
  })

  test('max divisor between 15 and 105: 15', () => {
    expect(maxDivisorBetweenTwoNumbers(15, 105)).toEqual(15)
  })

  test('max divisor between -52 and 39: 13', () => {
    expect(maxDivisorBetweenTwoNumbers(-52, 39)).toEqual(13)
  })

  test('max divisor between 12.1 and 2: 0', () => {
    expect(maxDivisorBetweenTwoNumbers(12.1, 2)).toEqual(0)
  })
})