import fs from 'fs';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question('Enter your File Name: ', (fileName) => {
        rl.question('Enter the Content: ', (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if (err) {
                    console.log(`Error while file create: ${err}`);
                    return;
                } else {
                    console.log(`${fileName}.text File created with content: ${content}`);
                }
                rl.close()
            })
        })
    })
}
fileCreation()