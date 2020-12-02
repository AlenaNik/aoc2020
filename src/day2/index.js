const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  let result = input.split('\n').filter(row => {
    let splitRow = row.split(' ')
    const [min, max] = splitRow[0].split('-')
    const char = splitRow[1]
    const letter = char && char.replace(/.$/,'')
    const password = splitRow[2]
    const values = password && password.split('').filter(function (value) {
      return value === letter
    }).length
    return values >= min && values <= max
  });
  return result.length
}

const goB = (input) => {
  let result = input.split('\n').filter(row => {
    let splitRow = row.split(' ')
    const [firstChar, secondChar] = splitRow[0].split('-')
    const char = splitRow[1]
    const letter = char && char.replace(/.$/,'')
    const password = splitRow[2]
    const letters = password && password.split('');
    // if ((letters && letters[firstChar] === letter && letters[secondChar] !== letter) || (letters && letters[firstChar] === letter && letters[firstChar] !== letter)) return true
    return ((letters && letters[firstChar] !== letter) + (letters && letters[secondChar - 1] === letter)) === 1;
  })
  return result.length
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
