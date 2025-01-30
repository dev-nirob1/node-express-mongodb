import readline from 'readline';
import fs from 'fs';



const rl = readline.createInterface({
    input: process.stdin, //standard input
    output: process.stdout //standard output
})

console.log('File Creation poject!');

const fileCreation = () => {
    rl.question('Enter the file name: ', (fileName) => {
        rl.question('Enter the content for your file: ', (content) => {
            fs.writeFile(`${fileName}.txt`, content,(err)=>{
                if(err){
                    console.log(`Error while file create, ${err.message}`);
                }else{
                    console.log(`File ${fileName}.txt created successfully!`)
                }
                rl.close()
            })
        })
    })
}

fileCreation()
