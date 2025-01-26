const { resolve } = require("dns");
const path = require("path")
 console.log(__dirname); //(note: __dirname is folder name)
console.log(__filename); // __filename is the exact file you'r working like path_module.js

// supposse you are creating a path for students management data, you do like it

const filePath = path.join("folder", "sutdents", "result.txt");
console.log(filePath);
// expected output => folder\sutdents\data.txt (forward slash / for macOS or linux)

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirname = path.dirname(filePath);
console.log({parseData, resolvedPath, extName, baseName, dirname, separator: path.sep});// Outputs the system's file separator. '\\' on Windows and '/' on macOS/Linux.

// if you use parse it will give you absolute path from begging

// when you use {} in console then json.stringify works and it give output couple of \\ . it look a like json but not a actual json