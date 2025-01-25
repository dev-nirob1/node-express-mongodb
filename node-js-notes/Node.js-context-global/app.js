console.log('hello world')

// there is no window or document object in node.js. Instead they use global object.

global.console.log('Hello World');

// also there is 'globalThis' it will work in both browser and Node.js .

globalThis.console.log('hello Node.js')
console.log(module); // When you log module in a Node.js environment, it provides detailed information about the current module. The module object is a built-in feature of Node.js that represents the current module and includes metadata about it.

console.log(globalThis.module);  // In Node.js, globalThis is the global object. However, module is not part of the globalThis object in Node.js. Instead, module is a local variable available within each file. OUTPUT will be undefined

console.log(process);
// module is part of process