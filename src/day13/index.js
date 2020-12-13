const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const getId = (arr) => {
  const data =  arr.split('\n')
  return +data[0]
}
const getBusList = (arr) => {
  const data =  arr.split('\n')
  return data[1].split(",")
      .filter(item => item !== 'x')
      .map(item => +item)
      .sort((a, b) => a - b)
}

const goA = (input) => {
  const timestamp = getId(input)
  const busList = getBusList(input)

  let minutes = timestamp;
  let busID = 0;
  let result = 0;

  busList.forEach((bus) => {
    while (bus - (timestamp % bus) < minutes) {
      busID = bus;
      minutes = bus - (timestamp % bus);
    }
    result =  minutes * busID
  })
  return result
}

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
