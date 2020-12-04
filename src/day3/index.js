const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

// fancy unredable functions
// multiply for step 2
let multiply = (arr) => {
  return arr.reduce(function (a, b) {
    return a * b
  }, 1);
};
// data
const data = (arr) => arr.split("\n")
// movement pattern
const treeCounter1 = (someMap, right, down, tree) => {
  let position = 0;
  return someMap.filter(function(row, index) {
    if (index % down === 0) {
      position = row[(index * right) % row.length]
      return position === tree
    }
  }).length
}


const treeCounter2 = (someMap, right, down, tree) => {
  let count = 0;
  let position = 0;
  // 6818112000
  someMap.forEach((row, index) => {
    if (index === 0 || index % down !== 0) return count;
    position = (position + right) % row.length;
    if (row[position] === tree) {
      count++
    }
  });
  return count;
}

const goA = (input, step1, step2, char) => {
  // 228
  return treeCounter1(data(input), step1, step2, char)
}

const goB = (input, step1, step2, char) => {
  const one = treeCounter2(data(input), 1, 1, char);
  const two = treeCounter2(data(input), 3, 1, char);
  const three = treeCounter2(data(input), 5, 1, char);
  const four = treeCounter2(data(input), 7, 1, char);
  const five = treeCounter2(data(input), 1, 2, char);
  // 6818112000
  return multiply([one, two, three, four, five]);
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input, 3, 1, '#')
const resultB = goB(input, step1 = 0, step2 = 0, '#')
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
