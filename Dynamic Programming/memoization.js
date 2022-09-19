//O(n) time complexity
function memoizedAddTo80() {
  //create cache local to the function
  let cache = {}

  //this uses javascript closures to keep the cache local
  return function (n) {
    if (n in cache) {
      console.log('computed with cache')
      return cache[n]
    }

    console.log('computed without cache')
    cache[n] = n + 80
    return cache[n]
  }
}

//returns the closure
const memoized = memoizedAddTo80()

let start = Date.now()
console.log(memoized(5))
let timeTaken = Date.now() - start
console.log(`${timeTaken} milliseconds`)

let start2 = Date.now()
console.log(memoized(5))
let timeTaken2 = Date.now() - start2
console.log(`${timeTaken2} milliseconds`)
