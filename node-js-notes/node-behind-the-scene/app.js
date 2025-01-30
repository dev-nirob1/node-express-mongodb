const fs = require('fs')

// sychronous tasks 
console.log('start');
const data = fs.readFileSync('file.txt', 'utf-8')
console.log(data);
console.log('sync');

//asynchronous tasks
console.log('asynchronous');
console.log('ki khobor boss')
fs.readFile('file.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log('from async',data)
})
console.log('tor boss e khaise loss')