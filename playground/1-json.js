const fs = require('fs')

const dataBuffer = fs.readFileSync('jsonfile.json')
const dataJson = dataBuffer.toString()

const dataObj = JSON.parse(dataJson)

dataObj.name = 'vikasDubey'
jsondata = JSON.stringify(dataObj)
fs.writeFileSync('jsonfile.json',jsondata)
console.log(dataObj)

// const obj = {
//     title:"this is node title",
//     body:'body of file'
// }
// jsondata = JSON.stringify(obj)
// fs.writeFileSync('jsonfile.json',jsondata)

