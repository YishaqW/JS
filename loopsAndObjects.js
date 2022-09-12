// // ===== For in Loop && For of Loops with Objects

// const user = {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwen-borough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }

// // For in Loop 
// for (let key in user){
// //  console.log(user[key]);
// }

// // ==== For of Loop
// for (const [key, value] of Object.entries(user)){
// // console.log(key, value);
// }






// const usersArr = [
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwen-borough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
// {
//   "id": 2,
//   "name": "Ervin Howell",
//   "username": "Antonette",
//   "email": "Shanna@melissa.tv",
//   "address": {
//     "street": "Victor Plains",
//     "suite": "Suite 879",
//     "city": "Wisokyburgh",
//     "zipcode": "90566-7771",
//     "geo": {
//       "lat": "-43.9509",
//       "lng": "-34.4618"
//     }
//   },
//   "phone": "010-692-6593 x09125",
//   "website": "anastasia.net",
//   "company": {
//     "name": "Deckow-Crist",
//     "catchPhrase": "Proactive didactic contingency",
//     "bs": "synergize scalable supply-chains"
//   }
// },
// {
//   "id": 3,
//   "name": "Clementine Bauch",
//   "username": "Samantha",
//   "email": "Nathan@yesenia.net",
//   "address": {
//     "street": "Douglas Extension",
//     "suite": "Suite 847",
//     "city": "McKenziehaven",
//     "zipcode": "59590-4157",
//     "geo": {
//       "lat": "-68.6102",
//       "lng": "-47.0653"
//     }
//   },
//   "phone": "1-463-123-4447",
//   "website": "ramiro.info",
//   "company": {
//     "name": "Romaguera-Jacobson",
//     "catchPhrase": "Face to face bifurcated interface",
//     "bs": "e-enable strategic applications"
//   }
// }
// ]

// const idToDelete = 3

// usersArr.forEach( (obj) => {
// if (obj.id === idToDelete){
//   console.log(`Deleting user ${obj.name}`);
// }
// })

const adventurer = {
	name: "Timothy",
	hit_points: 10,
	belongings: ["sword", "potion", "Tums"]
}
adventurer.dob = "05/09/2000"
console.log(adventurer.belongings[0])

// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// const adventurer = {
// 	name: "Timothy",
// 	hit_points: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// }

// console.log(adventurer.companion.type)
// const adventurer = {
// 	name: 'Timothy',
// 	hit_points: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }

// console.log(adventurer.companion.companion.type)

// const adventurer = {
// 	name: 'Timothy',
// 	hit_points: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }

// console.log(adventurer.companion.companion.belongings[2])

const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
// console.log(movies[0].title);

for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}