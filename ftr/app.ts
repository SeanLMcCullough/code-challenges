import prompts from 'prompts'
import { isFibonacci } from './math'

const numbers = new Map()

export default async function run () {
  const { printDelaySeconds } = await prompts({
    type: 'number',
    name: 'printDelaySeconds',
    message: 'Please input the number of time in seconds between emitting numbers and their frequency'
  })
  const interval = printDelaySeconds * 1000
  let timer = setInterval(printNumbers, interval)
  function resume () {
    if (timer) return
    timer = setInterval(printNumbers, interval)
  }
  function halt () {
    clearInterval(timer)
    timer = null
  }

  while (true) {
    const { input } = await prompts({
      type: 'text',
      name: 'input',
      message: `Please enter the ${numbers.size ? 'next' : 'first'} number`
    })
    if (input === 'quit') {
      halt()
      return prompts({
        type: 'text',
        name: 'quit',
        message: 'Thanks for playing, press any key to exit.'
      })
    }
    else if (input === 'halt') halt()
    else if (input === 'resume') resume()
    const n = parseInt(input)
    if (isNaN(n)) continue
    if (isFibonacci(n)) console.log('FIB')
    numbers.set(n, (numbers.get(n) || 0) + 1)
  }
}

function printNumbers () {
  const counts = Array.from(numbers.entries())
    .sort(([a, x], [b, y]) => y - x)
    .map(([k, v]) => `${k}:${v}`)
  console.log(counts.join(', '))
}
