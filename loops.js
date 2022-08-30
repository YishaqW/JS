// let total = 0 //global variable

// for (let i = 0; i < 10; i += 3) {
//     console.log(i);
//     total += i
//     console.log(`the total is: ${total}`)
// }

// const message = 'Hello World'
// console.log(message.length);

// for (let i = 0; i < message.length; i++){
//     console.log(message[i])
// }

// for (let i = message.length -1; i >= 0; i--){
//     console.log(message[i])
// }


// console.log(message[message.length -1])

// for(let i = 0: i )



// for(let i = 3; i <= 10; i++){
    
//   if(i === 5){
//       console.log('before continue');
//       continue
//       console.log('after cont');
//   } else if (i === 5){
//       break
//   }
  
//   // console.log(`${i} * 2 = ${i * 2}`);
//   console.log(`${i}`);
// }


// const word = 'kayak'
// let reversed = ''

// [4] o
// [3] l
// [2] l
// [1] e
// [0] H

// for (let i = word.length -1; i >= 0; i--) {
//     reversed += word[i]
//     console.log(reversed)
// }

// console.log(reversed);



// ==========> turning in assignment <=========== \\

// for (let a = 1; a <= 10; a++) {
//   if (a % 2 === 1) {
//     console.log(a);
//   }
//   if (a === 10) {
//     for (let a = 1; a <= 10; a++)
//       if (a % 2 === 0) {
//         console.log(a);
//       }
//   }
// }


//  for (let i = 10; i > 0; i--) {
//    console.log(i) }


// for (let i = 6; i <= 60; i += 3) {
//   //  console.log(i) 
//   if (i % 3 === 0) {
//     console.log(i) 
//   }
//  }


// for (i = 0; i <= 10; i++) {
//   if (i % 2 === 0)
//     console.log(i)
// }


// let sign = ""
// for (let i = 0; i <= 7; i++) {
//   sign += ['#']
//   console.log(sign)
// }

// for (let i = 3; i < 35; i +=3) {
//   console.log(i)
// } 

// for (let i = 5; i < 100; i +=5) {
//   console.log(i)
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i * 3)
//   }
// }





// ==================> FIZZ-BUZZ <==================\\

// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:

// For numbers divisible by 3, print "Fizz" instead of the number
// For numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5.
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).




// for (let i = 1; i <= 100; i++) {
  
//   if (i % 5 == 0 && i%3==0) {
//     console.log('FizzBuzz')
//   }
//    if (i % 3 == 0) {
//     console.log('Fizz') 
//     continue
//   }
//   if (i % 5 === 0) {
//      console.log('Buzz') 
//      continue
//       }
//   console.log(i)
// }


// for (let i = 0; i <= 100; i++) {
//   if(i%3 == 0 && i%5 !== 0){
//       console.log ("Fizz")
//      } if( i%5 == 0 && i%3 !== 0){
//       console.log('Buzz')
//       continue
//   } if(i%3 == 0 && i%5 == 0){
//   console.log('FizzBuzz')
//   } else{
//       console.log(i)
//   }
// }


let Fizz = 'Fizz'
let Buzz = 'Buzz'

for(i=1; i<=100 ;i++)
{
  
   if(i%3==0)
  {
    console.log(Fizz)
  }
  
   if(i%5==0 && i%3==0)
  {
      console.log("FizzBuzz")
  }
    else if(i%5==0)
    {
        console.log(Buzz)
    }

    else
    {
        console.log(i)
    }
}


// ==========early morning math============ //

// let num1 = 32;
// let num2 = 25;
// let num3 = 92;
// let num4 = 64;

// // ADD CODE BELOW HERE
// num1 += 17
// num2 -= 14
// num3 *= 11
// num4 /= 8

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)

// =========================== WHILE LOOPS =========================== //
// (initialization, condition, incrementor )
// let lives = 3  
// let time = 10

// while(lives > 0 && time > 0) {
//   console.log(`Playing the game.... `)  // BACKTICKS ARE NEEDED!!!!
//   console.log(`Time left ${time} and lives left: ${lives}`) 
  
//   if (time % 2 === 0){
//     console.log('You Lose one life!')
//     lives--

//   }
//   if (lives === 0) {
//   console.log('Game Over!')
//   break
//   }

//   time--
// }

// console.log('Go back to Main Menu')



// let count = 2;

// while (count < 9) {
//   console.log(count)
//   count += 2 }


// let addThis = 0 
// let sum = 0

// while (addThis < 10) {
//   sum += addThis 
//   addThis++
//   console.log(sum) 
// }
 



// ============== FOR OF LOOP =============== //
// let message = 123
// // message = parseFloat(message)
// // console.log(message);

// // for (let i = 0; i < message.length; i++) {
//   // console.log(message[c]) 

// for(c of message) {
//   console.log(c)
// }