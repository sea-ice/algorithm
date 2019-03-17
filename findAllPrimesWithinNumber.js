function findAllPrimesWithinNumber(number) {
  if (number < 2) return []
  let flags = Array.apply(null, new Array(number + 1)).map((_, i) => i > 1)
  let primes = []

  let nextPrime = 0
  while (true) {
    nextPrime = flags.findIndex((v, i) => v && (i > nextPrime))
    if (nextPrime === -1) break
    primes.push(nextPrime)

    let nextNumber = nextPrime * nextPrime
    while (nextNumber <= number) {
      flags[nextNumber] = false
      nextNumber += nextPrime
    }
  }
  return primes
}

module.exports = findAllPrimesWithinNumber