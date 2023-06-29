// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// describe("formSentences", () => {
//   it("returns an array of sentences", () => {
//     expect(formSentences(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

// b) Create the function that makes the test pass.
const formSentences = (arr) => {
  var newArr = []
  for (var person of arr) {
    var firstN = person.name.split(" ")[0].toUpperCase()[0] + person.name.split(" ")[0].slice(1)
    var lastN = person.name.split(" ")[1].toUpperCase()[0] + person.name.split(" ")[1].slice(1)
    var fullN= `${firstN} ${lastN}`
    newArr = newArr.concat(`${fullN} is ${person.occupation}.`)
  }
  return newArr
  
}
//console.log(formSentences(hitchhikersCharacters))

// Pseudo code:
// Create function at accepts array nested with objects and returns an array
// First make an empty array to store sentences in
// 2nd, delcare 2 variables. One being the first name which will be capitalized as well as the last name
// 3rd, concatenate the a string interpolation of the full name and the occupation into the empty array
// return array with sentences inside.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// describe("remainder", () => {
//   it("returns an array containing remainders from numbers", () => {
//     expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//     expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
//   })
// })

// b) Create the function that makes the test pass.

const remainder = (dataTypes) => {
  return dataTypes.filter((value) => typeof value === typeof 0).map((value) => value%3)
}

// console.log(remainder(hodgepodge1))
// console.log(remainder(hodgepodge2))


// Pseudo code:
// Create a function that accepts an array of data types returns an array of remainders to numbers
// filter through the array and set condition pick out values that numbers using the typeof method
// next we use the map method to iterate through the filtered array and find the remainders of the values.
// return contains the remainders of remaining values in the array  

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// describe("x", () => {
//   it("returns a total sum", () => {
//     expect(x(cubeAndSum1)).toEqual(99)
//     expect(x(cubeAndSum2)).toEqual(1125)
//   })
// })

// b) Create the function that makes the test pass.


const x = (arr, sum=0) => {
  arr.forEach((value) => {sum+=value**3})
  return sum
}
console.log(x(cubeAndSum1))
console.log(x(cubeAndSum2))

// Pseudo code:
//Create a function the that returns total sum after each value is cubed
// function will accept to parameters, one array and default variable `sum` assign to 0
// .map() to iterate to each value and cube them.
// .amp() again to add to value to `sum` while also reassigning as you add each value
//  return `sum`