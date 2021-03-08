const fs = require('fs')
const { connect } = require('http2')
// const book ={
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday'
// }

// const bookjson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookjson)

 const dataBuffer = fs.readFileSync('1-json.json')
 const dataJSON = dataBuffer.toString()
 const user = JSON.parse(dataJSON)
 
 user.name = 'Gunther'
 user.age = 25

 const userJSON = JSON.stringify(user)
 fs.writeFileSync('1-json.json', userJSON)