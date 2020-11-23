// Phi, the golden ratio
const PHI = (1 + Math.sqrt(5)) / 2

// fibonacci provides the fibonacci number at the provided index beginning at 0
export const fibonacci = (i: number) => Math.floor((Math.pow(PHI, i) - Math.pow(-1 / PHI, i)) / Math.sqrt(5))

// isFibonacci returns true if the provided number i is a part of the
// first 1000 fibonacci digits
export const isFibonacci = (i: number) => {
  return i <= fibonacci(999)
  && (isSquare(5 * i * i + 4) || isSquare(5 * i * i - 4))
}

// Returns true if the provided number i is a perfect square
const isSquare = (i: number) => {
  const sq = Math.floor(Math.sqrt(i))
  return sq * sq === i
}
