const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

// utils
// get arr o nums
const numbers = (arr) => arr.split("\n").map(function(item) {
    return +item
});
// fancy sum items in the arr
let sum = (arr) => {
   return arr.reduce(function (a, b) {
        return a + b
    }, 0);
};
// fancy multiply
let multiply = (arr) => {
   return arr.reduce(function (a, b) {
        return a * b
    }, 1);
};


const goA = (input) => {
  let result = 0;
  let myExpenses = numbers(input)
  myExpenses.forEach(first => {
      myExpenses.forEach(second => {
          if (first + second === 2020) {
              result = multiply([first, second]);
          }
      })
  })
    return result;
}

const goB = (input) => {
  let result = 0;
  let myExpenses = numbers(input)
    myExpenses.forEach(first => {
        myExpenses.forEach(second => {
            myExpenses.forEach(third => {
                if (sum([first, second, third]) === 2020) {
                    result = multiply([first, second, third]);
                    console.log(result)
                }
            })
        })
    })
    return result
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
