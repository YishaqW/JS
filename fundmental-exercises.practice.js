// ====  Exercise 1 ==== //
function computeArea(width, height) {
  const area = width * height
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

const rec1 = computeArea(5,10)
console.log(rec1)


// ==== Exercise 2 ==== //
const planetHasWater = function(planet){
  planet = planet.toLowerCase()
  if (planet === 'earth' || planet === 'mars') {
    return true
  } else {
    return false
  }
}
  const planetEarth = planetHasWater('EArth')
console.log(planetEarth)

  const planetVenus = planetHasWater('Venus')
console.log(planetHasWater('Venus'))

  const planetMars = planetHasWater('MARS')
console.log(planetHasWater('MARS'))


// ==== Exercises L2 ==== // 
function addTwo(num) {
  return num + 2
}
let fire = addTwo(8)
console.log(fire)


// ==== Ex. LS P2 ==== //
const addS = str => str + "s"
console.log(addS('Sam'))


// ==== EX. LS P3 ==== //
function sayHello(name = ', Guest') {
  return "Hi" + name 
}
const Sam = (sayHello(', Sam'))
console.log(sayHello())


// ==== EX. LS P4 ==== //
const wereAwesome = (myName, classmateName) => `${classmateName} and ${myName} are awesome!` 
const us = wereAwesome('Abe', 'Yishaq')
console.log(us)


// ==== EX. LS P5 ==== //
const isOdd = function(num) {
  // (5 / 2) will have a reminder of 1, it's an odd number
  if (num % 2 !== 0 ) {
  return true
 } else {
  return false
 }
}
console.log(isOdd(3))
console.log(isOdd(4))


// ==== Challenges ==== //

function reverseString(str){
  let reverseStr = '' // pace holder for the reversed string

  // loop for as long as we have characters in the string
  for(let i = str.length -1; i >= 0; i--){
      reverseStr += str[i] // concat the current character to the variable
  }

  return reverseStr
}

console.log( reverseString('qahsiY maharbA tebenesedloW'));


// ===== capitalize string =====//

apple
banana
const capitalizeString = str => str[0].toUpperCase() + str.substring(1)

function capitalizeStr(word){
    return word.at(0).toUpperCase() + word.slice(1)
}

console.log(capitalizeString('apple'))
console.log(capitalizeStr('banana'))