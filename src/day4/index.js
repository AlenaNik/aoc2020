const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

// fancy  functions
const data = (arr) => arr.split('\n\n').map(item => {
  let rows = item.split(' ')
  return rows.map(value => value.split(':')[0])
})

let sum = (arr) => {
  return arr.reduce(function (a, b) {
    return a + b
  }, 0)
};

const batch = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
]

const goA = (input) => {
  return data(input).filter(row => {
    //console.log(data(input))
    return batch.every(code => {
      return row.includes(code) && row.length === 7;
    })
  }).length
}
// 19

const goB = (input) => {
  return
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
