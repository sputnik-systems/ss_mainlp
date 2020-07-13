// export const random = (min, max) =>
//   Math.floor(Math.random() * (max - min)) + min

export function random(min, max, step = 1) {
  var delta, range, rand
  if (arguments.length < 2) {
    max = min
    min = 0
  }

  delta = max - min
  range = delta / step
  rand = Math.random()
  rand *= range
  rand = Math.floor(rand)
  rand *= step
  rand += min
  return rand
}

export const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}
