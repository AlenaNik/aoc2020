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

  const validations = [
    ['byr', (value) => value >= 1920 && value <= 2002],
    ['iyr', (value) => value >= 2010 && value <= 2020],
    ['eyr', (value) => value >= 2020 && value <= 2030],
    ['hgt', (value) => {
    // value.slice(0, -2)
    // if cm value >= 150 && value <= 193 if in value >= 59 && value <= 76
    }],
    ['hcl',(value) => /#[0-9a-f]{6}/.test(value)],
    ['ecl',(value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(code => code === value)],
    ['pid',(value) => /^\d{9}$/.test(value)]
  ]


  return passports.filter(passport => {
    const arrayPass = passport.split('\n').join(' ').split(' ')
    const fields = arrayPass.map(i => i.split(':')[0])

    const success = arrayPass.every(pass => {
      const [code, val] = pass.split(':')
      console.log(code, val)
    })
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
