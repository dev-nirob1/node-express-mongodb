import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// console.log(rl);

const todos = [];
const showMenu = () => {
    console.log('\n1: Add a Task');
    console.log("2: View Tasks");
    console.log("3: Exit");
    rl.question("Choose an option: ", handleInput)
}

const handleInput = (option) => {
    if (option === '1') {
        rl.question('Enter the Task: ', (task) => {
            todos.push(task)
            console.log('task added: ', task);
            showMenu();
        })
    } else if (option === '2') {
        console.log('\nYour Todo Lists');
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        })
        showMenu();

    } else if (option === '3') {
        console.log('Goode Bye!');
        rl.close()
    }else{
        console.log('Invalid Option. Please Try Again');
        showMenu()
    }
}

showMenu();