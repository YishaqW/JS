

const subtractTwo = (num) => num -2


const recreateMap = (array, callback ) => {
  const newArray = []
  for (let i = 0; i < array.length; i++){
    const results = callback(array[i])
    newArray.push(results)
  }
  return newArray
}


console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]