/* ================================= A. Q+A  ==================================================== 
Q1. How do we assign a value to a variable?
  A1. We use the key words, "const" or "let" before naming the variable, then use the assignment operator "=" to assign the value. Following up with the value and putting it in quotations if it's a string element.
  ex. const name1 = 'Yishaq'

Q2. How do we change the value of a variable?
  A1. We must first make sure we've declared the variable with the key word "let" in order to able to change it without syntax error. 
  Once confirmed, we must call on the variable then follow up with the assignment operator "=" then following up with the new value.
  ex. (1) let name1 = Yishaq
  ex. (2) name1 = Danny

Q3. How do we assign an existing variable to a new variable?
  A3. We must use the key word "const" or "let" to call on the new variable and then follow up with the assignment operator "=" then following up with the existing variable.
  ex. (1) const name1 = Yishaq
  ex. (2) const name2 = name1 

Q4. Remind me, what are declare, assign, and define?
  A4. To declare something is to give it an identifier so that you can reference it. 
  To define something is to give it a meaning. (key words)
  To assign something is to store information in it.

Q5. What is pseudo-coding and why should you do it?
  A5. Pseudo-coding is a simplified programming language, used before actually coding to generally laying out the blueprint of what is needed to be done step by step in the code.

Q6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
  A5. 60%  


======================================= B. STRINGS ==================================================
Q1. Create a variable called firstVariable
A1. let firstVariable = ''

Q2. Assign it the value of the string "Hello World"
A2. firstVariable = 'Hello World'

Q3. Change the value of this variable to some number
A3. firstVariable = 7

Q4. Store the value of firstVariable in a new variable called secondVariable
A4. let secondVariable += firstVariable 

Q5. Change the value of secondVariable to any string.
A5. secondVariable = 'Hi'

Q6. What is the value of firstVariable?
A6. 7

Q7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
A7. let yourName = 'Yishaq' 
let greeting = "Hello, my name is " + yourName + "."


=======================================C. BOOLEANS===================================================*/
  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

  // console.log(a < b);
  // console.log(c > d);
  // console.log('Name' === 'Name');
  // // FOR THE NEXT TWO, USE ONLY && OR ||
  // console.log(true || false);
  // console.log(false && false && false && false && false || true);
  // console.log(false === false)
  // console.log(e === 'Kevin');
  // console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  // console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  // console.log(48 == '48');



/* =====================================D. THE FARM ==========================================

1. Declare a variable animal. Set it to be either "cow" or something else
2. Write code that will print out "mooooo" if the it is equal to cow
3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
4. Commit */

// let animal = 'cow'
// if (animal === 'cow') {
//   console.log('mooooo')
// } else {
//   console.log("Hey! You're not a cow.")
// }


// /* =====================================E. DRIVER'S ED ==========================================
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young." */
// const age = 13 
// if (age >= 16){
//   console.log("Here are the keys!")
// } else {
//   console.log("Sorry, you're too young.")
// }


/* =====================================||. LOOPS===============================================
Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++) 

==== A. The basics ====
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000 

// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

// for(let i = 10; i <= 400; i++){
//   console.log(i)
// }

// let i = 12
// while(i < 4000){
//   console.log(i)
//   i+=3
// }

==== B. Get even ====

1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number" 

// for(let i = 2; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " <-- is an even number")
//   } else {
//   console.log(i)
//  }
// }

==== C. Give me Five ====
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
 Example Output:
I found a 5. High five!
I found a 10. High five! */

// for(let i = 0; i <= 100; i++){
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("I found a " + i + ". High five!" + " I found a " + i + ". Three is a crowd")
//   }
//    else if (i % 5 === 0) {
//     console.log("I found a " + i + ". High five!") 
//   } else if (i % 3 === 0) {
//     console.log("I found a " + i + ". Three is a crowd")
//   } else {
//     console.log(i)
//   }
// }

/* Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five! 

==== D. Savings account ====
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
2. Check your work! Your bank_account should have $55 in it.
3. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
4. Check your work! Your bank_account should have $10,100 in it. */

// let bank_account = 0

// for( i = 0; i <= 10; i++){
//   bank_account = bank_account+= i
  
// }
// console.log(bank_account)

// for( i = 0; i <= 100; i++){
//   bank_account = bank_account+= i*2
  
// }
// console.log(bank_account)
/* ==========================================III. Arrays & Control flow=====================================
====A. Talk about it:====
Q1. What are the things in an array called?
A1. 
Q2. Do Arrays guarantee those things will be in order?
A1.
Q3. What real-life thing could you model with an array?
A3. 
  

====B. Easy Does It====

Create an array that contains three quotes and store it in a variable called quotes*/

// let quotes = ["what goes up must come down", "words matter", "think twice and be nice"]

// // ==== C. Accessing elements ====

// // Given the following array 
// const randomThings = [1, 10, "Hello", true]
// // Q1. How do you access the 1st element in the array?
// console.log(randomThings[3])
// // Q2. Change the value of "Hello" to "World"
// console.log(randomThings.splice(2, 1,'world'))
// // Q3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

// ====D. Change values ====

// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // Q1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2])
// // Q2. Change the value of "Github" to "Octocat"
// console.log(ourClass.splice(-1, 1, "Octocat"))
// // Q3. Add a new element, "Cloud City" to the array
// console.log(ourClass.push('Cloud City')) //unshift will add it to the front, push to the back
// console.log(ourClass)

// ====E. Mix It Up ====

//Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
//Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Q1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon")
// myArray.push("Hi")
// console.log(myArray)
// // Q2. Remove the 5 from the beginning of the array.
// myArray.shift() // shift() method removes the first element from an array
// console.log(myArray)
// // Q3. Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift('Bob Marley')
// console.log(myArray) // unshift() method adds to the first element in an array
// // Q4. Remove the string of your choice from the end of the array.
// myArray.pop()
// console.log(myArray)
// // Q5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// myArray.reverse()
// console.log(myArray)
// // yes it mutated it. mutate means changes the original copy of the data. it reverse the order of the data from last to first and first to last. 

// ====F. Biggie Smalls ====

// Create a variable that contains an integer.
// let num = 23
//Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

// if (num < 100){
//   console.log("little number")
// } else if (num >= 100) {
//   console.log("big number")
// }

// ====G. Monkey in the Middle ====

// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 

// if(num < 10){
//   console.log("little number")
// } else if (num > 10){
//   console.log("big number")
// } else {
//   console.log("monkey")
// }

// ====H. What's in Your Closet? ====

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, 'raybans')
// console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] =  "stained knit hat"
// console.log(kristynsCloset)
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0])
// In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][1])
// Access one item from Thom's accessories array.
// console.log(thomsCloset[2][2])
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][2] + "!")
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas."
// console.log(thomsCloset)


// ==== IV. Functions ====
// A. printGreeting

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// ====B. printCool ====

//Write a function printCool that accepts one parameter,
// name as an argument. The function should print the name and a message saying that that person is cool.

// function printCool(name){
//   return name + " is cool"
// }
// console.log(printCool("Captain Reynolds"));

// ====C. calculateCube ====

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// function calculateCube(num){
//   return num**3
// }
// console.log(calculateCube(5));


// ====D. isVowel ====

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// function isVowel(argument){

// 	// const text;
// 	argument = argument.toLowerCase();

//     const vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (let i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//       }
//       return false;
// }
// console.log(isVowel('D'));


// ====E. getTwoLengths====
// function getTwoLengths(string1, string2) {
//   const list = [string1.length, string2.length]
//   console.log(list)
// }
// getTwoLengths('red','blue')


// // ====F. getMultipleLengths====
// function getMultipleLengths(array) {
// const list = [array[0].length,array[1].length,array[2].length, array[3].length, array[4].length]
// console.log(list)
// }
// getMultipleLengths(["hello", "what", "is", "up", "dude"]);


// ====G. maxOfThree====
// function maxOfThree(num1,num2,num3) {
// const biggestNum = Math.max(num1, num2, num3)
// console.log(biggestNum)
// }
// maxOfThree(6, 9, 1);

// H. printLongestWord 
// let printLongestWord = (arr) => {
// const descending = arr.sort((a,b) => b.length - a.length);
// return arr[0]
// } 
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max",  'ButterPeanut', "PeanutButter","big", "Todd"]));

//==========================Objects=================================
// ====A. Make a user object====
const user = {
  name: 'Sam',
  email: 'Sam@aol.com',
  age: 21,
  purchased: '[]',

}

// ====B. Update the user====
user.email = 'sammy@aol.com'
console.log(user.email)

user.age++
console.log(user.age)
