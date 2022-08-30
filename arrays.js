const movies = ['Shrek', 'Shrek 2', 'Shrek 3']

// console.log(movies.length)

const top10 = []

top10.push('Royal 007') // push an element to the end of the array
top10.push(movies[2])

top10.unshift('Star Wars') // unshift an element to the beginning of the array

console.log(top10)

const movieOfTheYear = top10.shift()
const lastMovie = top10.pop()

console.log(movieOfTheYear)
console.log(lastMovie)
console.log(top10)


// Primitive Types 'string', booleans, numbers
let num1 = 20
const num2 = num1

num1 = 100

// console.log(num1); //100
// console.log(num2); // 20

// Array declaration

const colors = ["red", 'blue','green']

const users = ['abe', 'alex', 'anna']

const movies = ['Bad boys', 'transformers', 'Casino', 'Caddyshack', 'Interstellar', 'Scarface']

console.log( movies.length );
console.log( movies.at(-1) );
console.log( movies[movies.length - 1] );

const top10 = []

top10.push('Royal 007') // push an element to the end of the array
top10.push(movies[2])

top10.unshift('Star Wars') // unshift add an element to the beginning of the array

console.log(top10);

const movieOfTheYear = top10.shift()
const lastMovie = top10.pop()

console.log(movieOfTheYear);
console.log(lastMovie);

console.log(top10);