const fs = require('fs')
const path = require('path')
// const filePath = __dirname;
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName)

const writeFile = fs.writeFileSync(filePath, 'synchronous crud', 'utf-8')
console.log(writeFile);

// const readFile = fs.readFileSync(filePath, 'utf-8')
// // // console.log(readFile.toString());
// console.log(readFile);

// Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and it's string representation.

// const updateData = fs.appendFileSync(filePath, '\nUpdated synchronous data', 'utf-8')
// console.log(updateData);

// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile);

const newUpdatedFileName = 'result.txt';const newFilePath = path.join(__dirname, newUpdatedFileName)
const renameFile = fs.renameSync(filePath, newFilePath)
console.log(renameFile);