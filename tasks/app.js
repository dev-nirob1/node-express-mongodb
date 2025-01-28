const EventEmitter = require('events');
const emitter = new EventEmitter()

const eventCounts = {
    userLogin: 0,
    userLogout: 0,
    userPurchased: 0,
    profileUpdate: 0
}
// console.log(eventCounts.userLogin);

emitter.on('user-login', (user) => {
    console.log(`${user} logged in`);
    eventCounts.userLogin += 1; //use bracket notation if there any special characters.
})
emitter.on('user-logout', (user) => {
    console.log(`${user} has been logged out`);
    eventCounts.userLogout += 1;
    // console.log(eventCounts.userLogout);
})
emitter.on('user-purchased', ({ user, product }) => {
    console.log(`${user} has buy a ${product}`);
    eventCounts.userPurchased += 1;
})
emitter.on('profile-update', ({ user, email }) => {
    console.log(`${user} has updated email: ${email}`);
    eventCounts.profileUpdate += 1;
})

emitter.on('summary', () => {
    let summary = ''
    for (let key in eventCounts) {
        summary = key + ' ' + eventCounts[key] + ' ' + 'times'
        console.log(summary);
    }
})

emitter.emit('user-login', 'Nirob')
emitter.emit('user-logout', 'Nirob')
emitter.emit('user-purchased', { user: 'Nirob', product: 'Laptop' })
emitter.emit('user-purchased', { user: 'Nirob', product: 'Laptop' })
emitter.emit('profile-update', { user: 'Nirob', email: 'mr.nirob@gmail.com' })
emitter.emit('profile-update', { user: 'Nirob', email: 'example@gmail.com' })
emitter.emit('summary')