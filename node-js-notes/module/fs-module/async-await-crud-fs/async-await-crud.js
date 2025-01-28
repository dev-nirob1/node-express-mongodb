const fs = require('fs/promises')
const path = require('path')

const fileName = 'result.txt'
const filePath = path.join(__dirname, fileName)


// read directory using promises
const directory = __dirname;

// fs.readdir(directory).then(data => console.log(data)).catch(err => console.log(err))

// // using async-await
// const readFolder = async () => {
//    try {
//    const res  = await fs.readdir(directory)
//    console.log(res);
//    } catch (error) {
//     console.log(error);
//    }
// }
// readFolder();


// create file
// const createFile = async()=>{
//     try {
//         const res = await fs.writeFile(filePath, 'Initial Data', 'utf-8')
//         console.log('Data added successfully');
//     } catch (error) {
//         console.log(error);
//     }
// }
// createFile()


//readFile
// const readFile = async () => {
//     try {
//         const res = await fs.readFile(filePath, 'utf-8')
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// readFile()

// update file 
// const updateContent = async()=> {
//     try {
//        await fs.appendFile(filePath, '\n new content', 'utf-8');
//         console.log('content updated successfully');
//     } catch (error) {
//         console.log(error);
//     }
// }
// updateContent();

//delete file
// const deleteFile = async()=> {
//     try {
//        await fs.unlink(filePath);
//         console.log('folder deleted successfully');
//     } catch (error) {
//         console.log(error)
//     }
// }
// deleteFile()