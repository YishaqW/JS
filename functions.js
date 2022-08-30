// Function Definition
// function sayHello() {
//   console.log('Hello....')
// }

// Function Execution 
// sayHello()

// // ES5
// function multiplication(x,y) {
//     console.log(x*y)
// }
// multiplication(2,4)
// multiplication(30,53)

// // ES6
// let division = (x,y) => x/y

// console.log(division(42,7))

// //ES5
// function addThreeNum(a, b, c){

//   console.log((a+b+c)/3)
// }


// addThreeNum(3,4,5)
// // addThreeNum(42, 42, 42)
// //ES6
// let apples = 2
// let addThreeNum = (v1, v2, v3) => {
//   console.log((v1 +v2 +v3)/3)
//   console.log(apples+4)
// }

function multiplyByTen(input){
  const val = input * 10
  console.log(val)
  return val
}
multiplyByTen(8)
// const result = multiplyByTen(2)

// console.log(result);

// sayHello()

// Function Definition
function sayHello(){
  console.log('Hello...')
}

// 
const greeting = function(){
  console.log("Hello World!");
}
// greeting()

// function execution
function multiply(num1, num2){
return num1 * num2
}


const result = multiply(2, 10)
// console.log(result)

// Arrow Functions
const multiplyByTwo = num => num * 2

const multiply2 = (num1, num2) => num1 * num2

const multiply3 = (num1, num2) => {
  return num1 * num2
}

console.log(multiply3(2,2));

const result1 = multiplyByTwo(4)

console.log(result1);




