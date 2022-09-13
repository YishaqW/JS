////////////////////////////////
// Easy Going
// for(i = 1; i < 21; i++) {
//   console.log(i)
// }
////////////////////////////////

////////////////////////////////
// Get Even
// for(let i = 0; i < 201; i+=2) {
//   console.log(i)
// }
////////////////////////////////

////////////////////////////////
// Fizz Buzz
// for(let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz')
//   }
//    else if (i % 3 === 0) {
//     console.log('Fizz')
//    }
//    else if (i % 5 === 0) {
//     console.log('Buzz')
//    }
//   else {
//     console.log(i)
//   }
// }
////////////////////////////////

////////////////////////////////
// Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = '5001'
// console.log(plantee)

// wolfy[3] = '"Gotham City"'
// console.log(wolfy)

// dart.splice(1, 0, "Hawkins")
// console.log(dart)

// wolfy.splice(0, 1, "Gameboy" )
// console.log(wolfy)
////////////////////////////////

////////////////////////////////
// Yell at the Ninja Turtles
// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "MichaelAngelo"];

// for (i of ninjaTurtles) {
//   console.log(i.toUpperCase())
// }
// ////////////////////////////////

// ////////////////////////////////
// // Methods, Revisited
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// console.log(favMovies[8]);
// console.log(favMovies.sort());
// console.log(favMovies);
// // Yes it permanently alters it!
// console.log(favMovies.pop()); // popped out the last movie 'Volver'
// console.log(favMovies);
// console.log(favMovies.push("Guardians of the Galaxy")); // adds to the end of the list
// console.log(favMovies);
// console.log(favMovies.reverse()); // permanently reverses it
// console.log(favMovies);
// console.log(favMovies.shift()); // pops out the first element in the array, permanently
// console.log(favMovies);
// console.log(favMovies.unshift()); // returned 18, but usually used to add elements to the start of the array
// console.log(favMovies);
// console.log(favMovies.splice(14, 1, "Avatar")); // it does permanently alter the array.
// console.log(favMovies);
// console.log(favMovies.slice(0, 6)); // does not alter the original array
// let split = favMovies.length / 2;
// let firstHalf = favMovies.slice(0, split)
// console.log(firstHalf)
// console.log(firstHalf); // the modify array has not been permanently saved in a new variable
// console.log(favMovies);
// console.log(favMovies[13]);
// console.log(favMovies.splice(13, 1));
// console.log(favMovies[13]);
// I don't recall permanently removing that movie but you will log the value that has taken  it's place.
// No, a 'const array' will only have an syntax error if you try to change the value of it's variable name but not the content of the list or elements itself :)
////////////////////////////////

////////////////////////////////
// Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
console.log(whereIsWaldo.splice(1,1))
console.log(whereIsWaldo)
console.log(whereIsWaldo[1].splice(2,1,'No One'))
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
