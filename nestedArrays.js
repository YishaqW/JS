const data = [
  [1,2,3], 
  [4,5,6],
  [7,8,9]
]

for  (let i = 0; i < data.length; i++){ // printed everything in that array(s) 
  // console.log(data[i])  // log each nested array
} 

for  (let i = 0; i < data.length; i++){ // printed everything in that array(s) 
    // console.log(data[i]) }
    for (let j = 0; j < data[i].length; j++){
    // console.log(data[i][j]) // each item in the nested array
  }
}

const data1 = [
  ["x","","o"], 
  ["","x",""],
  ["","","x"]
]
// console.table(data1)

const studentsData = [ ['Jack', 24], ['Sara', 23], ['Peter', 25] ]

for (let outer = 0; outer < studentsData.length; outer++){
  // console.log(studentsData[outer])

  for (let inner = 0; inner < studentsData[outer].length; inner++){
    // console.log(studentsData[outer][inner])
  }
}

studentsData.forEach((arr, index) => {
  console.log(arr)
  arr.forEach((item) => {
    console.log(item)
  })
})