let calculations = 0,
  calculations2 = 0,
  calculations3 = 0

//normal recursion without dp [ 0(n^2) time complexity ]
function fibonacci(n) {
  calculations2++
  if (n < 2) {
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonnaciMaster1(n) {
  let answer = [0, 1]

  for (let i = 2; i <= n; i++) {
    calculations3++
    answer.push(answer[i - 2] + answer[i - 1])
  }

  return answer.pop()
}

//dp using memoization (top-down approach) technique [ O(n) time complexity because we are doing each calculation once]
function fibonacciMaster() {
  let cache = {}

  return function fib(n) {
    calculations++
    if (n in cache) {
      return cache[n]
    }
    if (n < 2) {
      return n
    }
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  }
}

const fasterFib = fibonacciMaster()
console.log('DP', fasterFib(10))
console.log(`we did ${calculations} calculations`)

console.log('Slow', fibonnaciMaster1(10))
console.log(`we did ${calculations3} calculations`)

console.log('Slower', fibonacci(10))
console.log(`we did ${calculations2} calculations`)
