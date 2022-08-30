//Primitive Types 'string', boolenas, numbers
let num1 = 2
const num2 = num1

num1 = 100

// Reference Types

const arr1 = ['Jan', 'Feb', 'March', 'April']
const arr2 = arr1 

const firstTwoMonths = arr2.slice(0,2)

firstTwoMonths.push('Dec')
arr1.push('Sept')
console.log(firstTwoMonths)

console.log(arr1)
console.log(arr2)

// arr2.push('June')

// console.log(arr1)
// console.log(arr2)

// Primitive Types 'string', booleans, numbers
let num1 = 20
const num2 = num1

num1 = 100

// console.log(num1); //100
// console.log(num2); // 20

// Reference Types

const arr1 = ['Jan', 'Feb', 'March', 'April']
const arr2 = arr1

arr1.unshift('Sep')
const firstTwoMonths = arr2.slice(0, 2)

// firstTwoMonths.push('Dec')

console.log(firstTwoMonths);

console.log(arr1);
console.log(arr2);