// 1 + n
const baseNumberPlus = function fn(base) {
  return function fn(n) {
    return base + n
  }
}

const onePlus = baseNumberPlus(1)
const twoPlus = baseNumberPlus(2)

console.log('1 + 2 =', onePlus(2))
console.log('2 + 5 =', twoPlus(5))
