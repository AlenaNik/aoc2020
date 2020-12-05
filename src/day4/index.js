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
  return arr.split('\n\n')
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
  let passports = input.split('\n\n')
      .map(value => value.replace(/\n/g, ' ').split(' ')
          .reduce((a, b) => {
            console.log(a)
            const [key, value] = b.split(':')
            a[key] = value
            return a
          }, {})
      )

  const validations = [
    ['byr', (value) => +value >= 1920 && +value <= 2002],
    ['iyr', (value) => +value >= 2010 && +value <= 2020],
    ['eyr', (value) => +value >= 2020 && +value <= 2030],
    ['hgt', (value) => {
      const numValue = +value.slice(0, -2)
      if (value.slice(-2) === 'cm') return 150 <= numValue && numValue <= 193
      if (value.slice(-2) === 'in') return 59 <= numValue && numValue <= 76
      return false
    }],
    ['hcl',(value) => /#[0-9a-f]{6}/.test(value)],
    ['ecl',(value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(code => code === value)],
    ['pid',(value) => /^\d{9}$/.test(value)]
  ]

  const result  = passports.filter((passport) => {
    return validations.every(([key, value]) => (passport[key] && value(passport[key]))) ? 1 : 0
  }).length
  return result
  // 101
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
