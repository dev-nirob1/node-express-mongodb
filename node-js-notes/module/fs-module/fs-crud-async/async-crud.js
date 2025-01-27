const fs = require('fs')
const path = require('path')
const fileName = 'asyncFs.txt'
const filePath = path.join(__dirname, fileName)

// write or create file
// const createFile = fs.writeFile(filePath,
//     'This is the aynchronous data', 'utf-8',
//     (err) => {
//         if (err) {
//             console.log(err); ;
//         } else {
//             console.log('File has been Created');
//         }
//     }
// )
// console.log(createFile);


//read file
// const readFile = fs.readFile(filePath, 'utf-8', (err, data)=> {
//     console.log(err);
//     console.log(data);
// })
// console.log(readFile);

//update content
// const updateContent = fs.appendFile(filePath, 
//     '\n another content added',
//     'utf-8', 
//     (err)=> {
//         console.log(err);
//     }
// )
// console.log(updateContent);

//Delete file

// const deleteFile = fs.unlink(filePath, (err)=>{
//     console.log(err);
// }
// )
// console.log(deleteFile);
