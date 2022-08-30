// =====Variables=====

// constant variables 
const greeting = "hello"

const greeting2 = 'hi'

const address = "123 Main Street"

// let variable 
let age = '20'
console.log(age)
age = '21'  //we're re-assigning the value of age 

// log the value of a variable 
console.log(greeting)
console.log(age)
console.log(greeting2)
console.log(address)
console.log(greeting2 + age)

// Create a variable with no value
let userInfo = '';  // will print nothing but will show that it has been printed
let username;   // will print 'undefined'
let userAge = 0; // will print '0'
console.log(username)

// DO NOT ASSIGN 'UNDEFINED' TO A VARIABLE 
let var1 = undefined 

// Representation of no value 
const password = null
console.log(password)

// Assign the value of a variable to another variable 
let fullName; 
const firstName = 'Yishaq'
const lastName = 'Woldesenebet'

fullName = firstName + ' ' +lastName

console.log(fullName)

//
const num1 = 3
const num2 = 2 
const total = num1 + num2
console.log(typeof('total'))
