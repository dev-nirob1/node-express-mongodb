const EventEmitter = require('events'); //import eventEmitter class
const emitter = new EventEmitter.EventEmitter() 
//create an instance of EventEmitter.


//define an event listener (addListener)
emitter.addListener('info', ()=>{
    console.log('This is events module node.js');
})

//an event listener(on)
emitter.on('greet', (data)=> {
    console.log(`Hello ${data.name}, are you a ${data.prof}?`);
})

//trigger the event(emit)
emitter.emit('greet', {name: 'Nirob', prof: 'Student'})
emitter.emit('info')