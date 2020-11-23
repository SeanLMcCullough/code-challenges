import { fibonacci, isFibonacci } from './math'

describe('fibonacci', () => {
  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
    [9, 34]
  ])('the %i fibonacci number is %i', (i, expected) => {
    expect(fibonacci(i)).toBe(expected)
  })
})

describe('isFibonacci', () => {
  test.each([
    [0, true],
    [1, true],
    [2, true],
    [3, true],
    [4, false],
    [5, true],
    [6, false],
    [7, false],
    [8, true],
  ])('%i is fibonacci: %s', (i, expected) => {
    expect(isFibonacci(i)).toBe(expected)
  })
})
