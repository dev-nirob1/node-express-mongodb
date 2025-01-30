const fs = require('fs')
// const fs = require('fs/promises') => to avoid re-writing fs.promises.
const path = require('path')

const filename = 'fspromises.txt'
const filePath = path.join(__dirname, filename)

//why .then() and .catch()
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.
// --------------------


//read directory
// const file = __dirname
// fs.promises.readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// create/write file

// fs.promises.writeFile(filePath, 
//     'This is crud using promises',
//     'utf-8'
// ).then(console.log('File Created Successfully'))
// .catch((err)=>console.log(err))


//read File
// fs.promises.readFile(filePath, 'utf-8')
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

//update file
// fs.promises.appendFile(filePath,
//     '\n Updated content',
//     'utf-8'
// ).then(console.log('data updaated successfully'))
//     .catch((err) => console.log(err))


// delete file 
// fs.promises.unlink(filePath).then(() => console.log('File deleted successfully')).catch((err) => console.log(err))