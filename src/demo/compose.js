const compose = (...fn) => {
  return fn.reduce((pre, cur) => {
    return (...args) => pre(cur(...args))
  })
}

const add10 = (num) => {
  return num + 10
}
const sub20 = (num) => {
  return num - 20
}
const add100 = (num) => {
  return num + 100
}

const res1 = add100(sub20(add10(1000)))
console.log(res1, 'res1')
const res2 = compose(add10, sub20, add100)(1000)
console.log(res2, 'res2')

export default compose
