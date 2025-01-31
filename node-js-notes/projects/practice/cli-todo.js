import { stdin, stdout } from 'process'
import rl from 'readline'

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})
const todos = []
const showMenu = () => {
    console.log('1: Add tasks');
    console.log('2: Show tasks');
    console.log('3: Exit');
    readline.question('Please select option: ' ,handleInput)
}

const handleInput =(option)=>{
    if(option === '1'){
        readline.question('Enter The Task: ', (task)=> {
            todos.push(task)
            console.log(`Task Added ${task}`);
            showMenu()
        })
    }else if(option === '2'){
        console.log('\nYour Todo lists: ');
        todos.map((item, i)=>{
            console.log(`${i +1}: ${item}`)
        })
        showMenu()
    }else if(option === '3'){
        console.log('Good Bye');
        readline.close()
    }else{
        console.log('Invalid Option');
        showMenu()
    }
}

showMenu()