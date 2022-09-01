
// // Primitive Types 'string', booleans, numbers
// let num1 = 20
// const num2 = num1

// num1 = 100

// // console.log(num1); //100
// // console.log(num2); // 20

// // Array declaration

// const colors = ["red", 'blue','green']

// const users = ['abe', 'alex', 'anna']

// const movies = ['Bad boys', 'transformers', 'Casino', 'Candy-shack', 'Interstellar', 'Scar-face']

//console.log( movies.length );
// console.log( movies.at(-1) );
// console.log( movies[movies.length - 1] );

// const top10 = []

// top10.push('Royal 007') // push an element to the end of the array
// top10.push(movies[2])

// top10.unshift('Star Wars') // unshift add an element to the beginning of the array

// console.log(top10);

// const movieOfTheYear = top10.shift()
// const lastMovie = top10.pop()

// console.log(movieOfTheYear);
// console.log(lastMovie);

// console.log(top10);

// ======== Looping over Arrays ======== //

// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]
// const total = []

// const multiplyByTwo = (num) => {
//   return num * 2
// }

// for (i = 0; i < numArr.length; i++) {
//   const result = multiplyByTwo(numArr[i])
//   total.push(result)
// }

// console.log(total)

// // const oddEvenNumbers = []

// for (let i = 0; i < numArr.length; i++){
//   // loop over the array
//   if (numArr[i] % 2 === 1) {
//     oddEvenNumbers.unshift(numArr[i])
//   }
//   // add all the even numbers to the end of oddEvenNumbers
//   else if (numArr[i] % 2 === 0) {
//     oddEvenNumbers.push(numArr[i])
//   }
//   console.log(`Iteration ${i}:`, oddEvenNumbers)
//   // add all the odd numbers to the beginning of oddEvenNumbers
// }

// console.log(oddEvenNumbers)





// // const movies = ['Bad boys', 'transformers', 'Casino', 'Candy-shack', 'Interstellar', 'Scar-face']

// // const evenNumbers = []

// // const oddNumbers = []

// //  for(let i = 0; i < numArr.length; i++){
// //   if (numArr[i] % 2 === 0) {
// //     evenNumbers.push(numArr[i])
// //   }
// //     else {
// //       oddNumbers.push(numArr[i])
// //     }
// // }
// // console.log(evenNumbers)
// // console.log(oddNumbers)



// ===== Array.forEach ==== //

// const latestShow = ['Candy-Shack', 'Interstellar', 'Scare-Face', 'Trading-Place']


// latestShow.forEach( (show) => { 
//   console.log(show) 
// })

// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]

// // numArr.forEach((num, x) => {
//   console.log(`${num} is a index: ${x}`)
// })

const increaseByTwo = [1, 2, 3, 4, 5]

//forEach will not mutate the original array or return a value
increaseByTwo.forEach((num, i) => {
  increaseByTwo[i] += 2 // mutates the original array
  num += 2 // will NOT mutate the original array
})
console.log(increaseByTwo)

// The map method returns a new array
const newArr = increaseByTwo.map((num) => {
  return num += 2
})
// console.log(newArr)