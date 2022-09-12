// ==== FOREACH PART 1==== //
const recreateForEach = (array, callback) => {
  // loop over the array
  // call the callback on each of the element inside the array
  for (let i = 0; i < array.length; i++) {
      callback(array[i])
  }
}

let alphabet = ' '
const letters = ['a', 'b', 'c', 'd']

recreateForEach(letters, function(char) {
    alphabet += char
})
console.log(alphabet) // prints 'abcd'






// ==== PART 2 === //

function recreateForEach (array, subtractTwo) {
  const results = [];
  recreateForEach(array, function (char) {
    results.push(subtractTwo(char));
  });
  return results;
}


const recreateMap = (array, callback ) => {
  const newArray = []

    const results = callback(array[i])
    newArray.push(results)
  
  return newArray
}

console.log(typeof recreateforEach); // should log: 'function'
recreateForEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3,4,5], n => n - 2)); // should log: [1, 2, 3]











// function clean(item) {
//   console.log(`I just cleaned a ${item}`)
// }

// const nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

// for (var i = 0; i < nails.length; i++) {
//   clean(nails[i])
// }

// // const planks = ["splintered plank", "straight plank", "bent plank"]

// // for (var i = 0; i < planks.length; i++) {
// //   clean(planks[i])
// // }

// // console.log('done!')