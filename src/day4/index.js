const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

// fancy  functions
const data1 = (arr) => {
  return arr.split('\n\n').map(item => {
    const keys = item.replace(/\n/g, ' ').split(' ')
    return keys.map(value => value.split(':')[0])
  })
}

const data2 = (arr) => {
  return arr.split('\n\n').map(item => {
    const keys = item.replace(/\n/g, ' ').split(' ')
    return keys.map(value => value.split(':')[0])
  })
}

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
  return data1(input).filter(row => {
    return batch.every(code => {
      return row.includes(code);
    })
  }).length
}

const goB = (input) => {
  const validations = [
    'byr', // 4 digits value >= 1920 && value <= 2002
    'iyr', // 4 digits value >= 2010 && value <= 2020
    'eyr', // 4 digits value >= 2020 && value <= 2030
    'hgt', // if cm value >= 150 && value <= 193 if in value >= 59 && value <= 76
    'hcl', // value.match(/#[0-9a-f]{6}/)
    'ecl', // one of (amb blu brn gry grn hzl oth)
    'pid', // 9 numbers value.match(/^\d{9}$/)
  ]
  return data2(input).filter(row => {
    console.log(row)
  }).length
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
